import { formatNumber } from '@corona-dashboard/common';
import { useRouter } from 'next/router';
import Ziekenhuis from '~/assets/ziekenhuis.svg';
import { ArticleStrip } from '~/components-styled/article-strip';
import { ArticleSummary } from '~/components-styled/article-teaser';
import { Box } from '~/components-styled/base';
import { ChoroplethTile } from '~/components-styled/choropleth-tile';
import { ContentHeader } from '~/components-styled/content-header';
import { KpiTile } from '~/components-styled/kpi-tile';
import { KpiValue } from '~/components-styled/kpi-value';
import { LineChartTile } from '~/components-styled/line-chart-tile';
import { addBackgroundRectangleCallback } from '~/components-styled/line-chart/logic/background-rectangle';
import { SEOHead } from '~/components-styled/seo-head';
import { TileList } from '~/components-styled/tile-list';
import { TwoKpiSection } from '~/components-styled/two-kpi-section';
import { Text } from '~/components-styled/typography';
import { municipalThresholds } from '~/components/choropleth/municipal-thresholds';
import { MunicipalityChoropleth } from '~/components/choropleth/municipality-choropleth';
import { createSelectMunicipalHandler } from '~/components/choropleth/select-handlers/create-select-municipal-handler';
import { createMunicipalHospitalAdmissionsTooltip } from '~/components/choropleth/tooltips/municipal/create-municipal-hospital-admissions-tooltip';
import { FCWithLayout } from '~/domain/layout/layout';
import { getMunicipalityLayout } from '~/domain/layout/municipality-layout';
import siteText from '~/locale/index';
import { createPageArticlesQuery } from '~/queries/create-page-articles-query';
import { createGetStaticProps } from '~/static-props/create-get-static-props';
import {
  createGetChoroplethData,
  createGetContent,
  getGmData,
  getLastGeneratedDate,
  createGetMessages,
} from '~/static-props/get-data';
import { colors } from '~/style/theme';
import { formatDateFromMilliseconds } from '~/utils/formatDate';
import { getTrailingDateRange } from '~/utils/get-trailing-date-range';
import { formatMessages } from '~/utils/messages/format-messages';
import { replaceVariablesInText } from '~/utils/replaceVariablesInText';

export { getStaticPaths } from '~/static-paths/gm';

export const getStaticProps = createGetStaticProps(
  getLastGeneratedDate,
  getGmData,
  createGetChoroplethData({
    gm: ({ hospital_nice }) => ({ hospital_nice }),
  }),
  createGetContent<{
    articles?: ArticleSummary[];
  }>(createPageArticlesQuery('hospitalPage')),
  createGetMessages(['hospitalPage'])
);

const text = siteText.gemeente_ziekenhuisopnames_per_dag;
const graphDescriptions = siteText.accessibility.grafieken;

const IntakeHospital: FCWithLayout<typeof getStaticProps> = (props) => {
  const { data, choropleth, municipalityName, content, messages } = props;
  const router = useRouter();

  const lastValue = data.hospital_nice.last_value;

  const { messageString, messageBlock } = formatMessages(messages);

  const underReportedRange = getTrailingDateRange(data.hospital_nice.values, 4);

  return (
    <>
      <SEOHead
        title={replaceVariablesInText(text.metadata.title, {
          municipalityName,
        })}
        description={replaceVariablesInText(text.metadata.description, {
          municipalityName,
        })}
      />
      <TileList>
        <ContentHeader
          category={messageString('intro:category')}
          title={replaceVariablesInText(messageString('intro:title'), {
            municipality: municipalityName,
          })}
          icon={<Ziekenhuis />}
          subtitle={messageBlock('intro:description')}
          metadata={{
            datumsText: text.datums,
            dateOrRange: lastValue.date_unix,
            dateOfInsertionUnix: lastValue.date_of_insertion_unix,
            dataSources: [text.bronnen.rivm],
          }}
          reference={text.reference}
        />

        <ArticleStrip articles={content.articles} />

        <TwoKpiSection>
          <KpiTile
            title={messageString('barscale:title')}
            description={messageString('barscale:description')}
            metadata={{
              date: lastValue.date_unix,
              source: text.bronnen.rivm,
            }}
          >
            <KpiValue
              data-cy="admissions_on_date_of_reporting"
              absolute={lastValue.admissions_on_date_of_reporting}
              difference={
                data.difference.hospital_nice__admissions_on_date_of_reporting
              }
            />
          </KpiTile>
        </TwoKpiSection>

        <ChoroplethTile
          title={replaceVariablesInText(messageString('map:title'), {
            municipality: municipalityName,
          })}
          metadata={{
            date: lastValue.date_unix,
            source: text.bronnen.rivm,
          }}
          description={messageString('map:description')}
          legend={{
            title: siteText.ziekenhuisopnames_per_dag.chloropleth_legenda.titel,
            thresholds:
              municipalThresholds.hospital_nice.admissions_on_date_of_reporting,
          }}
        >
          <MunicipalityChoropleth
            selectedCode={data.code}
            data={choropleth.gm}
            metricName="hospital_nice"
            metricProperty="admissions_on_date_of_reporting"
            tooltipContent={createMunicipalHospitalAdmissionsTooltip(
              siteText.choropleth_tooltip.hospital_admissions,
              municipalThresholds.hospital_nice.admissions_on_date_of_reporting,
              createSelectMunicipalHandler(router, 'ziekenhuis-opnames')
            )}
            onSelect={createSelectMunicipalHandler(
              router,
              'ziekenhuis-opnames'
            )}
          />
        </ChoroplethTile>

        <LineChartTile
          title={messageString('linechart:title')}
          description={messageString('linechart:description')}
          ariaDescription={graphDescriptions.ziekenhuis_opnames}
          metadata={{ source: text.bronnen.rivm }}
          timeframeOptions={['all', '5weeks', 'week']}
          values={data.hospital_nice.values}
          formatTooltip={(values) => {
            const value = values[0];
            const isInrange = value.__date >= underReportedRange[0];
            return (
              <>
                <Box display="flex" alignItems="center" flexDirection="column">
                  {isInrange && (
                    <Text as="span" fontSize={0} color={colors.annotation}>
                      ({siteText.common.incomplete})
                    </Text>
                  )}
                  <Box>
                    <Text as="span" fontWeight="bold">
                      {`${formatDateFromMilliseconds(
                        value.__date.getTime()
                      )}: `}
                    </Text>
                    {formatNumber(value.__value)}
                  </Box>
                </Box>
              </>
            );
          }}
          linesConfig={[
            {
              metricProperty: 'admissions_on_date_of_admission',
            },
          ]}
          componentCallback={addBackgroundRectangleCallback(
            underReportedRange,
            {
              fill: colors.data.underReported,
            }
          )}
          legendItems={[
            {
              color: colors.data.primary,
              label: messageString('linechart:label_title'),
              shape: 'line',
            },
            {
              color: colors.data.underReported,
              label: messageString('linechart:label_underreported'),
              shape: 'square',
            },
          ]}
          showLegend
        />
      </TileList>
    </>
  );
};

IntakeHospital.getLayout = getMunicipalityLayout();

export default IntakeHospital;
