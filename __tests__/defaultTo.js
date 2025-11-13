import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
  test("returns the value if it is not null, undefined, or NaN", () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test("returns the default value if the value is undefined", () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test("returns the default value if the value is null", () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test("returns the default value if the value is NaN", () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });

  test("returns the value if it is a valid number", () => {
    expect(defaultTo(0, 10)).toBe(0);
  });

  test("returns the value if it is a valid string", () => {
    expect(defaultTo("hello", "default")).toBe("hello");
  });
});
