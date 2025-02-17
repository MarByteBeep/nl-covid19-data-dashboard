import { StructureBuilder as S } from '@sanity/structure';
import { BsCardChecklist, BsLockFill, BsMap, BsTable } from 'react-icons/bs';
import { GrCircleInformation, GrDashboard } from 'react-icons/gr';
import { MdQuestionAnswer } from 'react-icons/md';
import { RiPagesFill } from 'react-icons/ri';
import 'sanity-mobile-preview/dist/index.css?raw';
import { elementsListItem } from './elements/elements-list-item';
import { lokalizeListItem } from './lokalize/lokalize-list-item';

/**
 * This is a list of doc types we handle in the custom menu structure. All
 * others will appear automatically at the bottom.
 */
const hiddenDocTypes = [
	'siteSettings',
	'topicalPage',
	'veelgesteldeVragen',
	'veelgesteldeVragenGroups',
	'faqQuestion',
	'cijferVerantwoording',
	'cijferVerantwoordingGroups',
	'overDitDashboard',
	'overRisicoNiveaus',
	'overRisicoNiveausNew',
	'roadmap',
	'lockdown',
	'behaviorPage',
	'deceasedPage',
	'situationsPage',
	'hospitalPage',
	'nursingHomePage',
	'elderlyAtHomePage',
	'infectiousPeoplePage',
	'disabilityCarePage',
	'intensiveCarePage',
	'positiveTestsPage',
	'in_positiveTestsPage',
	'in_variantsPage',
	'reproductionPage',
	'sewerPage',
	'vaccinationsPage',
	'variantsPage',
	'toegankelijkheid',
	'riskLevelNational',
	'lokalizeSubject',
	'lokalizeString',
	'lokalizeText',
	'timeSeries',
	'timelineEvent',
	'contact',
	'cijferVerantwoordingItem',
	'kpi',
	'choropleth',
	'warning',
	'chartConfiguration',
	'kpiConfiguration',
];

export default () =>
	S.list()
		.title('Content')
		.items([
			lokalizeListItem(),
			elementsListItem(),
			S.listItem()
				.title('Lockdown en Routekaart')
				.icon(BsTable)
				.child(
					S.list()
						.title('Lockdown en Routekaart')
						.items([
							addListItem(BsLockFill, 'Lockdown', 'lockdown'),
							addListItem(BsTable, 'Routekaart', 'roadmap'),
						])
				),
			addListItem(
				GrCircleInformation,
				'Over dit dashboard',
				'overDitDashboard'
			),
			addListItem(GrDashboard, 'Actueel', 'topicalPage'),
			addListItem(BsMap, 'Over de risiconiveaus', 'overRisicoNiveausNew'),
			S.listItem()
				.title('Veelgestelde vragen')
				.icon(MdQuestionAnswer)
				.child(
					S.list()
						.title('Groepen en Vragen')
						.items([
							addListItem(
								MdQuestionAnswer,
								'Veelgestelde vragen pagina',
								'veelgesteldeVragen'
							),
							...S.documentTypeListItems().filter(
								(item) =>
									item.getId() === 'veelgesteldeVragenGroups'
							),
							...S.documentTypeListItems().filter(
								(item) => item.getId() === 'faqQuestion'
							),
						])
				),
			S.listItem()
				.title('Cijferverantwoording')
				.icon(BsCardChecklist)
				.child(
					S.list()
						.title('Groepen en Vragen')
						.items([
							addListItem(
								MdQuestionAnswer,
								'CijferVerantwoording pagina',
								'cijferVerantwoording'
							),
							...S.documentTypeListItems().filter(
								(item) =>
									item.getId() ===
									'cijferVerantwoordingGroups'
							),
							...S.documentTypeListItems().filter(
								(item) =>
									item.getId() === 'cijferVerantwoordingItem'
							),
						])
				),
			addListItem(
				RiPagesFill,
				'Inschaling risiconiveau nationaal',
				'riskLevelNational'
			),
			addListItem(RiPagesFill, 'Sterfte', 'deceasedPage'),
			addListItem(RiPagesFill, 'Brononderzoek GGD', 'situationsPage'),
			addListItem(RiPagesFill, 'Gedrag en naleving', 'behaviorPage'),
			addListItem(RiPagesFill, 'Ziekenhuis opnames', 'hospitalPage'),
			addListItem(RiPagesFill, 'Verpleeghuiszorg', 'nursingHomePage'),
			addListItem(RiPagesFill, 'Gehandicaptenzorg', 'disabilityCarePage'),
			addListItem(
				RiPagesFill,
				'Thuiswonend 70-plus',
				'elderlyAtHomePage'
			),
			addListItem(
				RiPagesFill,
				'Besmettelijke mensen',
				'infectiousPeoplePage'
			),
			addListItem(RiPagesFill, 'IC opnames', 'intensiveCarePage'),
			addListItem(RiPagesFill, 'Positieve testen', 'positiveTestsPage'),
			addListItem(
				RiPagesFill,
				'Positieve testen internationaal',
				'in_positiveTestsPage'
			),
			addListItem(
				RiPagesFill,
				'Varianten internationaal',
				'in_variantsPage'
			),
			addListItem(RiPagesFill, 'Reproductiegetal', 'reproductionPage'),
			addListItem(RiPagesFill, 'Covid varianten', 'variantsPage'),
			addListItem(RiPagesFill, 'Rioolwater', 'sewerPage'),
			addListItem(RiPagesFill, 'Vaccinaties', 'vaccinationsPage'),
			addListItem(
				GrCircleInformation,
				'Toegankelijkheid',
				'toegankelijkheid'
			),
			addListItem(RiPagesFill, 'Contact', 'contact'),

			S.divider(),

			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() === 'kpiConfiguration' ||
					item.getId() === 'chartConfiguration'
			),

			S.divider(),

			/**
			 * Display all document types that haven't been handled in the structure
			 * above.
			 */
			...S.documentTypeListItems().filter(
				(item) => !hiddenDocTypes.includes(item.getId() || '')
			),
		]);

function addListItem(
	icon: React.FC,
	title: string,
	schemaType: string,
	documentId = schemaType
) {
	return S.listItem()
		.title(title)
		.schemaType(schemaType)
		.icon(icon)
		.child(
			S.editor()
				.title(title)
				.schemaType(schemaType)
				.documentId(documentId)
				.views([S.view.form()])
		);
}
