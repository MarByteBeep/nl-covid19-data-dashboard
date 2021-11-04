import { TimeframeOption } from '@corona-dashboard/common';
import { RadioGroup } from '~/components/radio-group';
import { useIntl } from '~/intl';

interface ChartTimeControlsProps {
	timeframe: TimeframeOption;
	onChange: (value: TimeframeOption) => void;
	timeframeOptions?: TimeframeOption[];
}

export function ChartTimeControls(props: ChartTimeControlsProps) {
	const {
		onChange,
		timeframe,
		timeframeOptions = ['all', '5weeks', '10weeks'],
	} = props;

	const { siteText } = useIntl();

	const labelMap = {
		'10weeks': siteText.charts.time_controls['10weeks'],
		'5weeks': siteText.charts.time_controls['5weeks'],
		all: siteText.charts.time_controls['all'],
		week: siteText.charts.time_controls['week'],
	};

	const items = timeframeOptions.map((key) => ({
		label: labelMap[key],
		value: key,
	}));

	return <RadioGroup value={timeframe} onChange={onChange} items={items} />;
}
