import castArray from "../src/castArray.js";

describe("castArray", () => {
  test("casts a non-array value to an array", () => {
    expect(castArray(1)).toEqual([1]);
    expect(castArray("abc")).toEqual(["abc"]);
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
  });

  test("wraps null and undefined in an array", () => {
    expect(castArray(null)).toEqual([null]);
    expect(castArray(undefined)).toEqual([undefined]);
  });

  test("returns an empty array when no arguments are provided", () => {
    expect(castArray()).toEqual([]);
  });

  test("returns the same array if the value is already an array", () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
});
