import { assert, ChoroplethThresholdsValue } from '@corona-dashboard/common';
import { scaleThreshold } from 'd3-scale';
import { useMemo } from 'react';
import { isDefined, isPresent } from 'ts-is-present';
import { DataConfig } from '~/components/choropleth';
import { thresholds } from './thresholds';
import { ChoroplethDataItem, CodeProp, mapToCodeType, MapType } from './types';
import { isCodedValueType } from './utils';

export function useFillColor<T extends ChoroplethDataItem>(
	data: T[],
	map: MapType,
	dataConfig: DataConfig<T>
) {
	const codeType = mapToCodeType[map];
	const { metricProperty, noDataFillColor } = dataConfig;

	const getValueByCode = useMemo(
		() => createGetValueByCode(metricProperty, codeType, data),
		[metricProperty, codeType, data]
	);

	const threshold = thresholds[map][metricProperty as string];
	assert(
		isDefined(threshold),
		`No threshold configured for map type ${map} and metric property ${metricProperty}`
	);

	const colorScale = useMemo(() => createColorScale(threshold), [threshold]);

	return useMemo(
		() => createGetFillColor(getValueByCode, colorScale, noDataFillColor),
		[getValueByCode, colorScale, noDataFillColor]
	);
}

export function getFillColor<T extends ChoroplethDataItem>(
	data: T[],
	map: MapType,
	dataConfig: DataConfig<T>
) {
	const codeType = mapToCodeType[map];
	const { metricProperty, noDataFillColor } = dataConfig;

	const getValueByCode = createGetValueByCode(metricProperty, codeType, data);
	const threshold = thresholds[map][metricProperty as string];
	assert(
		isDefined(threshold),
		`No threshold configured for map type ${map} and metric property ${metricProperty}`
	);
	const colorScale = createColorScale(threshold);

	return createGetFillColor(getValueByCode, colorScale, noDataFillColor);
}

function createGetFillColor(
	getValueByCode: ReturnType<typeof createGetValueByCode>,
	colorScale: ReturnType<typeof createColorScale>,
	noDataFillColor: string
) {
	return (code: string) => {
		const value = getValueByCode(code);
		const result = isPresent(value) ? colorScale(value) : noDataFillColor;
		return result;
	};
}

function createColorScale(threshold: ChoroplethThresholdsValue<number>[]) {
	const domain = threshold.map((t) => t.threshold);
	domain.shift();
	const color = scaleThreshold<number, string>()
		.domain(domain)
		.range(threshold.map((t) => t.color));

	return color;
}

function createGetValueByCode<T extends ChoroplethDataItem>(
	metricProperty: keyof T,
	codeType: CodeProp,
	data: T[]
) {
	return (code: string) => {
		const item = data
			.filter(isCodedValueType(codeType))
			.find(
				(x) =>
					(x as unknown as Record<string, string>)[codeType] === code
			);

		return isDefined(item) && isPresent(item[metricProperty])
			? Number(item[metricProperty])
			: undefined;
	};
}
