import { colors, getLastFilledValue } from '@corona-dashboard/common';
import { Ziektegolf } from '@corona-dashboard/icons';
import { isEmpty } from 'lodash';
import { ChartTile } from '~/components/chart-tile';
import { PageInformationBlock } from '~/components/page-information-block';
import { TileList } from '~/components/tile-list';
import { TimeSeriesChart } from '~/components/time-series-chart';
import { WarningTile } from '~/components/warning-tile';
import { Layout } from '~/domain/layout/layout';
import { NlLayout } from '~/domain/layout/nl-layout';
import { useIntl } from '~/intl';
import {
	createPageArticlesQuery,
	PageArticlesQueryResult,
} from '~/queries/create-page-articles-query';
import {
	createGetStaticProps,
	StaticProps,
} from '~/static-props/create-get-static-props';
import {
	createGetContent,
	getLastGeneratedDate,
	selectNlData,
} from '~/static-props/get-data';

export const getStaticProps = createGetStaticProps(
	getLastGeneratedDate,
	selectNlData('infectious_people'),
	createGetContent<PageArticlesQueryResult>((context) => {
		const { locale } = context;
		return createPageArticlesQuery('infectiousPeoplePage', locale);
	})
);

const InfectiousPeople = (props: StaticProps<typeof getStaticProps>) => {
	const { selectedNlData: data, lastGenerated, content } = props;
	const { siteText } = useIntl();

	const lastFullValue = getLastFilledValue(data.infectious_people);

	const text = siteText.besmettelijke_personen;

	const metadata = {
		...siteText.nationaal_metadata,
		title: text.metadata.title,
		description: text.metadata.description,
	};

	return (
		<Layout {...metadata} lastGenerated={lastGenerated}>
			<NlLayout>
				<TileList>
					<PageInformationBlock
						category={siteText.nationaal_layout.headings.archief}
						screenReaderCategory={
							siteText.sidebar.metrics.infectious_people.title
						}
						title={text.title}
						icon={<Ziektegolf />}
						description={text.toelichting_pagina}
						metadata={{
							datumsText: text.datums,
							dateOrRange: lastFullValue.date_unix,
							dateOfInsertionUnix:
								lastFullValue.date_of_insertion_unix,
							dataSources: [text.bronnen.rivm],
						}}
						referenceLink={text.reference.href}
						articles={content.articles}
					/>

					{text.belangrijk_bericht &&
						!isEmpty(text.belangrijk_bericht) && (
							<WarningTile
								isFullWidth
								message={text.belangrijk_bericht}
								variant="emphasis"
							/>
						)}

					<ChartTile
						metadata={{ source: text.bronnen.rivm }}
						title={text.linechart_titel}
						description={text.linechart_description}
					>
						<TimeSeriesChart
							accessibility={{
								key: 'infectious_people_over_time_chart',
							}}
							tooltipTitle={text.linechart_titel}
							values={data.infectious_people.values}
							seriesConfig={[
								{
									type: 'line',
									metricProperty: 'estimate',
									label: text.legenda_line,
									shortLabel: text.lineLegendLabel,
									color: colors.data.primary,
								},
								{
									type: 'range',
									metricPropertyLow: 'margin_low',
									metricPropertyHigh: 'margin_high',
									label: text.legenda_marge,
									shortLabel: text.rangeLegendLabel,
									color: colors.data.margin,
								},
							]}
						/>
					</ChartTile>
				</TileList>
			</NlLayout>
		</Layout>
	);
};

export default InfectiousPeople;
