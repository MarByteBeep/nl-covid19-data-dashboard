import { colors, DifferenceDecimal } from '@corona-dashboard/common';
import { Down, Gelijk, Up } from '@corona-dashboard/icons';
import css from '@styled-system/css';
import styled from 'styled-components';
import { useIntl } from '~/intl';

export function VariantDifference({ value }: { value: DifferenceDecimal }) {
	const { siteText, formatPercentage } = useIntl();
	const diffText = siteText.covid_varianten.varianten_tabel.verschil;

	const options = {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1,
	};

	if (value === undefined) {
		return <>-</>;
	}
	if (value.difference > 0) {
		return (
			<Difference color={colors.body}>
				<Up />
				{formatPercentage(value.difference, options)} {diffText.meer}
			</Difference>
		);
	}
	if (value.difference < 0) {
		return (
			<Difference color={colors.body}>
				<Down />
				{formatPercentage(-value.difference, options)} {diffText.minder}
			</Difference>
		);
	}
	return (
		<Difference color={colors.data.neutral}>
			<Gelijk color={colors.data.neutral} />
			{diffText.gelijk}
		</Difference>
	);
}

const Difference = styled.div<{ color: string }>((x) =>
	css({
		svg: {
			color: x.color,
			mr: 1,
			width: '12px',
			height: '12px',
			verticalAlign: 'middle',
		},
	})
);
