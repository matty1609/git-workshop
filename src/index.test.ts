import { sum } from "./index";

describe("sum", () => {
  test("should add up multiple numbers", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });
});
