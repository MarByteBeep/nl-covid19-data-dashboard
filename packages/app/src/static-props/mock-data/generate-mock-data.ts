import {
  JsonDataScope,
  VerboseFeatureWithMockData,
} from '@corona-dashboard/common';
import { sub } from 'date-fns';
import Series from 'time-series-data-generator';
import { getSchema } from '~/static-props/utils/get-schema';

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
}

function generateMockChoroplethData<T>(
  feature: VerboseFeatureWithMockData<T>,
  scope: ChoroplethScope
) {
  const { mockConfiguration } = feature;
  const [rootSchema, metricSchema] = getSchema(feature, scope);
  const { itemCount, propertyConfigurations, type } = mockConfiguration;

  const result = Object.entries(propertyConfigurations).map(
    ([key, value]) => {}
  );

  const until = new Date();
  const from = sub(until, { days: itemCount });
  const values = new Series({
    from: from.toISOString(),
    until: until.toISOString(),
    interval: 86400,
  })
    .sin()
    .map((x) => ({
      ...x,
      timestamp: new Date(x.timestamp).getTime() * 1000,
    }));
}
