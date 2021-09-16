import { sub } from 'date-fns';
import Series, { SineValue } from 'time-series-data-generator';

export function createTimestampedSeries(
  itemCount: number,
  range: [number, number],
  decimalCount: number,
  dateSpan: number,
  propertyName: string
) {
  const until = new Date();
  const from = sub(until, { days: itemCount });

  const values = new Series({
    from: from.toISOString(),
    until: until.toISOString(),
    interval: 86400,
  })
    .sin()
    .map<Omit<SineValue, 'timestamp'> & { date_unix: number }>((x) => ({
      ...x,
      date_unix: new Date(x.timestamp).getTime() * 1000,
    }))
    .map((x) => {
      return {
        ...x,
        [propertyName]: adjustValue(x.value, range, decimalCount),
      };
    });

  if (dateSpan === 1) {
    return values;
  }

  let startDate = until;
  return values
    .map<
      Omit<SineValue, 'timestamp'> & {
        date_start_unix: number;
        date_end_unix: number;
      }
    >((x) => {
      delete (x as any).date_unix;
      const nextDate = sub(startDate, { days: dateSpan });
      const result = {
        ...x,
        date_start_unix: startDate.getTime() * 1000,
        date_end_unix: nextDate.getTime() * 1000,
      };
      startDate = sub(nextDate, { days: 1 });
      return result;
    })
    .reverse();
}

function adjustValue(
  value: number,
  range: [number, number],
  decimalCount: number
) {
  const [low, high] = range;

  let result = value * 100;

  result *= high;

  result += low;

  if (decimalCount > 0) {
    return result + +value.toFixed(decimalCount);
  }

  return result;
}
