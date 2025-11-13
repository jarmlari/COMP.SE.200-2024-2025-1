import every from "../src/every.js";

describe("every", () => {
  test("returns true if all elements pass the predicate", () => {
    const array = [2, 4, 6];
    const isEven = (num) => num % 2 === 0;

    expect(every(array, isEven)).toBe(true);
  });

  test("returns false if any element fails the predicate", () => {
    const array = [2, 3, 6];
    const isEven = (num) => num % 2 === 0;

    expect(every(array, isEven)).toBe(false);
  });

  test("returns true for an empty array", () => {
    const array = [];
    const alwaysTrue = () => true;

    expect(every(array, alwaysTrue)).toBe(true);
  });

  test("returns false if array is null or undefined", () => {
    const alwaysTrue = () => true;

    expect(every(null, alwaysTrue)).toBe(false);
    expect(every(undefined, alwaysTrue)).toBe(false);
  });

  test("predicate receives correct arguments", () => {
    const array = [10, 20, 30];
    const mockPredicate = jest.fn(() => true);

    every(array, mockPredicate);

    expect(mockPredicate).toHaveBeenCalledTimes(3);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, array);
    expect(mockPredicate).toHaveBeenCalledWith(30, 2, array);
  });
});
