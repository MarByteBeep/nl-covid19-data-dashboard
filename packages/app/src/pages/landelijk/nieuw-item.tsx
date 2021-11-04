import { colors } from '@corona-dashboard/common';
import { ChartTile } from '~/components/chart-tile';
import { TileList } from '~/components/tile-list';
import { TimeSeriesChart } from '~/components/time-series-chart';
import { Layout } from '~/domain/layout/layout';
import { NlLayout } from '~/domain/layout/nl-layout';
import { useIntl } from '~/intl';
import {
	createGetStaticProps,
	StaticProps,
} from '~/static-props/create-get-static-props';
import { getLastGeneratedDate, selectNlData } from '~/static-props/get-data';

export const getStaticProps = createGetStaticProps(
	getLastGeneratedDate,
	selectNlData('tested_overall')
);

export default function Page(props: StaticProps<typeof getStaticProps>) {
	const { selectedNlData: data, lastGenerated } = props;

	const { siteText } = useIntl();

	const text = siteText.positief_geteste_personen;

	const metadata = {
		...siteText.nationaal_metadata,
		title: text.metadata.title,
		description: text.metadata.description,
	};

	return (
		<Layout {...metadata} lastGenerated={lastGenerated}>
			<NlLayout>
				<TileList>
					<ChartTile
						title={text.linechart_titel}
						description={text.linechart_toelichting}
						metadata={{
							source: text.bronnen.rivm,
						}}
						timeframeOptions={['all', '5weeks', '10weeks']}
					>
						{(timeframe) => (
							<TimeSeriesChart
								accessibility={{
									key: 'confirmed_cases_infected_over_time_chart',
								}}
								values={data.tested_overall.values}
								timeframe={timeframe}
								seriesConfig={[
									{
										type: 'line',
										metricProperty:
											'infected_per_100k_moving_average',
										label: siteText
											.positief_geteste_personen
											.tooltip_labels
											.infected_per_100k_moving_average,
										color: colors.data.primary,
									},
									{
										type: 'bar',
										metricProperty: 'infected_per_100k',
										label: siteText
											.positief_geteste_personen
											.tooltip_labels.infected_per_100k,
										color: colors.data.primary,
									},
									{
										type: 'invisible',
										metricProperty: 'infected',
										label: siteText
											.positief_geteste_personen
											.tooltip_labels.infected_overall,
										color: colors.data.primary,
									},
								]}
							/>
						)}
					</ChartTile>
				</TileList>
			</NlLayout>
		</Layout>
	);
}
