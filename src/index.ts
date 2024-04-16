export function sum(numbers: number[]): number {
  return numbers.reduce((acc, value) => acc + value, 0);
}

export function multiply(numbers: number[]): number {
  return numbers.reduce((acc, value) => acc * value, 1);
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(multiply([2, 3, 4]));
