declare module 'time-series-data-generator' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export default class Series<PropertyName extends string = 'value'> {
    constructor(ctorValues?: CtorValues<PropertyName>);
    sin(sineArgs?: SineCosArgs): SineValue<PropertyName>[];
    cos(sineArgs?: SineCosArgs): SineValue<PropertyName>[];
    gaussian(gaussianArgs?: GaussianArgs): SineValue<PropertyName>[];
    ratio(ratioArgs: RatioArgs): SineValue<PropertyName>[];
    generate(func: (unix: number) => number): SineValue<PropertyName>[];
  }
  export type SineValue<PropertyName extends string = 'value'> = {
    timestamp: string;
  } & { [P in PropertyName]: number };
  export type CtorValues<PropertyName extends string> = {
    from: string;
    until: string;
    interval?: number;
    numOfData?: number;
    keyName?: PropertyName;
    type?: 'monospaced' | 'random';
  };
  export type SineCosArgs = {
    coefficient: number;
    constant: number;
    decimalDigits: number;
    period: number;
  };
  export type GaussianArgs = {
    mean: number;
    variance: number;
    decimalDigits: number;
  };
  export type RatioArgs = {
    weights: Record<string, number>;
  };
}
