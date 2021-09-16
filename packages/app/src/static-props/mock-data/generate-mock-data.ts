import {
  isPropertyValueConfiguration,
  JsonDataScope,
  MetricScope,
  PropertyValueConfiguration,
  PropertyValueGenerator,
  VerboseFeatureWithMockData,
} from '@corona-dashboard/common';
import { gmData } from '~/data/gm';
import { vrData } from '~/data/vr';
import { getSchema } from '~/static-props/utils/get-schema';
import { loadJsonFromDataFile } from '../utils/load-json-from-data-file';
import { createTimestampedSeries } from './create-timestamped-series';

const countryCodes = Object.keys(
  loadJsonFromDataFile<Record<string, string>>(
    'nl-country-names.json',
    'static-json'
  )
).map((x) => x.toLocaleUpperCase());

const choroplethScopes: JsonDataScope[] = [
  'in_collection',
  'vr_collection',
  'gm_collection',
];

type ChoroplethScope = 'in_collection' | 'vr_collection' | 'gm_collection';

function isChoroplethScope(value: JsonDataScope): value is ChoroplethScope {
  return choroplethScopes.includes(value);
}

export function generateMockData<T>(
  feature: VerboseFeatureWithMockData<T>,
  scope: JsonDataScope
) {
  if (isChoroplethScope(scope)) {
    return generateMockChoroplethData(feature, scope);
  }
  return generateTimeseriesData(feature, scope);
}

const codeProperties: Record<
  ChoroplethScope,
  { propertyName: string; data: string[] }
> = {
  gm_collection: {
    propertyName: 'gmcode',
    data: gmData.map((x) => x.gemcode),
  },
  vr_collection: {
    propertyName: 'vrcode',
    data: vrData.map((x) => x.code),
  },
  in_collection: {
    propertyName: 'country_code',
    data: countryCodes,
  },
};
function generateMockChoroplethData<T>(
  feature: VerboseFeatureWithMockData<T>,
  scope: ChoroplethScope
) {
  const info = codeProperties[scope];
  //return createChoroplethData(info.data, info.propertyName);
}

function generateTimeseriesData<T>(
  feature: VerboseFeatureWithMockData<T>,
  scope: MetricScope
) {
  const { mockConfiguration } = feature;
  const [rootSchema, metricSchema] = getSchema(feature, scope);

  const {
    itemCount,
    propertyTimeSeriesConfigurations: propertyConfigurations,
  } = mockConfiguration;

  const dateSpanDayCount =
    'dateSpanDayCount' in mockConfiguration
      ? mockConfiguration.dateSpanDayCount
      : 1;

  const propertyNames = Object.keys(propertyConfigurations);
  const configurations = Object.values<
    PropertyValueConfiguration | PropertyValueGenerator<T>
  >(propertyConfigurations).filter(isPropertyValueConfiguration);

  const itemWithSeries = configurations.map((x, index) => {
    const range = 'range' in x ? x.range : ([0, 100] as [number, number]);

    return createTimestampedSeries(
      itemCount,
      range,
      x.decimalCount ?? 0,
      dateSpanDayCount,
      propertyNames[index]
    );
  });

  const firstSeries = itemWithSeries.shift();

  const mergedSeries = firstSeries?.map((x, index) => {
    return itemWithSeries.reduce((aggr, y) => {
      return {
        ...aggr,
        ...y[index],
      };
    }, x);
  });
}
