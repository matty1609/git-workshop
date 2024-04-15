export function sum(numbers: number[]): number {
  return numbers.reduce((acc, value) => acc + value, 0);
}

console.log(sum([1, 2, 3, 4, 5]));
