import { multiply, sum } from "./index";

describe("sum", () => {
  test("should add up multiple numbers", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
});

describe("multiply", () => {
  test("should multiply several numbers", () => {
    expect(multiply([2, 3, 4])).toBe(24);
  });
});
