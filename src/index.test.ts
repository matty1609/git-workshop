import { sum } from "./index";

describe("sum", () => {
  test("should add up multiple numbers", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
  test("should return result for one number provided", () => {
    expect(sum([1])).toBe(1);
  });
  test("should add up floats", () => {
    expect(sum([1 / 3, 0.5])).toBe(0.83);
  });

  test("should add up negative numbers", () => {
    expect(sum([-1, 1, -5])).toBe(-5);
  });
});
