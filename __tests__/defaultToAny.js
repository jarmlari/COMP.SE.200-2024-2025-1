import defaultToAny from "../src/defaultToAny.js";

describe("defaultToAny", () => {
  test("returns the value if it is not null, undefined, or NaN", () => {
    expect(defaultToAny(1, 10, 20)).toBe(1);
  });

  test("returns the first default value if the value is undefined", () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10);
  });

  test("returns the first non-null, non-undefined, non-NaN default value", () => {
    expect(defaultToAny(undefined, null, 20)).toBe(20);
  });

  test("returns NaN if all values are NaN", () => {
    expect(defaultToAny(undefined, null, NaN)).toBeNaN();
  });

  test("handles multiple default values correctly", () => {
    expect(defaultToAny(undefined, 0, false, "fallback")).toBe(0);
  });

  test("returns the value if no default values are provided", () => {
    expect(defaultToAny(42)).toBe(42);
  });
});
