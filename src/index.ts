export function sum(numbers: number[]): number {
  return numbers.reduce((acc, value) => acc + value, 0);
}

export function multiply(numbers: number[]): number {
  return numbers.reduce((acc, value) => acc * value, 1);
}

// eslint-disable-next-line unicorn/prefer-module
if (require.main === module) {
  const MONDAY_COUNT = 1;
  const TUESDAY_COUNT = 2;
  const WEDNESDAY_COUNT = 3;
  const THURSDAY_COUNT = 4;
  const FRIDAY_COUNT = 5;

  console.info(
    sum([
      MONDAY_COUNT,
      TUESDAY_COUNT,
      WEDNESDAY_COUNT,
      THURSDAY_COUNT,
      FRIDAY_COUNT,
    ]),
  );

  console.info(
    multiply([
      MONDAY_COUNT,
      TUESDAY_COUNT,
      WEDNESDAY_COUNT,
      THURSDAY_COUNT,
      FRIDAY_COUNT,
    ]),
  );
}
