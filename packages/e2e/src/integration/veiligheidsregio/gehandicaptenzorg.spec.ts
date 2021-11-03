import { RegionalContext } from '~/integration/types';

context('Regionaal - Gehandicaptenzorg', () => {
	before(() => {
		cy.beforeRegionTests('gehandicaptenzorg');
	});

	it('Should show the correct KPI values', function (this: RegionalContext) {
		const lastValue = this.regionData.disability_care.last_value;

		const kpiTestInfo = {
			newly_infected_people: cy.formatters.formatNumber(
				lastValue.newly_infected_people
			),
			infected_locations_total: [
				cy.formatters.formatNumber(lastValue.infected_locations_total),
				`${cy.formatters.formatPercentage(
					lastValue.infected_locations_percentage
				)}%`,
			],
			newly_infected_locations: cy.formatters.formatNumber(
				lastValue.newly_infected_locations
			),
			deceased_daily: cy.formatters.formatNumber(
				lastValue.deceased_daily
			),
		};

		cy.checkKpiValues(kpiTestInfo);
	});
});
