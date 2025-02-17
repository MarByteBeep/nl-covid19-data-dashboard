import { DataScopeKey } from '@corona-dashboard/common';
import { TimelineEventConfig } from '~/components/time-series-chart/components/timeline';

function formatStringArray(array: string[]) {
	return `[${array.map((x) => `'${x}'`).join(',')}]`;
}

export function createElementsQuery(
	scope: DataScopeKey,
	metricNames: string[],
	locale: string
) {
	const query = `// groq
    {
      'timeSeries': *[
        _type == 'timeSeries'
        && scope == '${scope}'
        && metricName in ${formatStringArray(metricNames)}
      ]{
        _id,
        metricName,
        metricProperty,
        timelineEventCollections[]->{timelineEvents[]{
          'title': title.${locale},
          'description': description.${locale},
          date,
          dateEnd
        }},
        warning
      },
      'kpi': *[
        _type == 'kpi'
        && scope == '${scope}'
        && metricName in ${formatStringArray(metricNames)}
      ]{
        _id,
        metricName,
        metricProperty
      },
      'warning': *[
        _type == 'warning'
        && scope == '${scope}'
        && metricName in ${formatStringArray(metricNames)}
      ]{
        _id,
        metricName,
        metricProperty,
        warning
      },
      'choropleth': *[
        _type == 'choropleth'
        && scope == '${scope}'
        && metricName in ${formatStringArray(metricNames)}
      ]{
        _id,
        metricName,
        metricProperty
      }
    }
  `;

	return query;
}

type ElementBase = {
	_id: string;
	scope: DataScopeKey;
	metricName: string;
	metricProperty: string | null;
};

type CmsTimelineEventConfig = {
	title: string;
	description: string;
	date: string;
	dateEnd: string;
};

type CmsTimeSeriesElement = {
	_id: string;
	scope: DataScopeKey;
	metricName: string;
	metricProperty: string | null;
	timelineEventCollections: CmsTimelineEventCollection[];
	warning: string | null;
};

type CmsTimelineEventCollection = {
	timelineEvents: CmsTimelineEventConfig[];
};

type CmsKpiElement = ElementBase;

type CmsChoroplethElement = ElementBase;

type CmsWarningElement = {
	warning: string;
} & ElementBase;

export type ElementsQueryResult = {
	timeSeries: CmsTimeSeriesElement[];
	kpi: CmsKpiElement[];
	choropleth: CmsChoroplethElement[];
	warning: CmsWarningElement[];
};

/**
 * Get the timeline configuration from the correct element and convert it to the
 * right format.
 */
export function getTimelineEvents(
	elements: CmsTimeSeriesElement[],
	metricName: string
) {
	const timelineEventCollections = elements.find(
		(x) => x.metricName === metricName
	)?.timelineEventCollections;

	return timelineEventCollections
		? timelineEventCollections.flatMap<TimelineEventConfig>((collection) =>
				collection.timelineEvents.map((x) => ({
					title: x.title,
					description: x.description,
					start: new Date(x.date).getTime() / 1000,
					end: x.dateEnd
						? new Date(x.dateEnd).getTime() / 1000
						: undefined,
				}))
		  )
		: undefined;
}

export function getWarning(elements: CmsWarningElement[], metricName: string) {
	return (
		elements.find((x) => x.metricName === metricName)?.warning || undefined
	);
}
