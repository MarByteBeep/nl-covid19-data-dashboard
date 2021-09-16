export function createChoroplethData(
  codes: string[],
  codePropertyName: string,
  propertyName: string,
  range: [number, number],
  decimalCount: number
) {
  return codes.map((x) => ({
    [codePropertyName]: x,
    [propertyName]: generateValue(range, decimalCount),
  }));
}

function generateValue(range: [number, number], decimalCount: number) {
  if (decimalCount === 0) {
    return Math.floor(Math.random() * range[1] + 1) + range[0];
  }
  return +(Math.random() * (range[1] + 1) + range[0]).toFixed(decimalCount);
}
