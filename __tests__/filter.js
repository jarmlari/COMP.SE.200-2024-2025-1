import filter from "../src/filter.js";

describe("filter", () => {
  test("filters an array based on the predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];

    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: "barney", active: true }]);
  });

  test("returns an empty array when no elements match the predicate", () => {
    const numbers = [1, 2, 3, 4];

    const result = filter(numbers, (num) => num > 10);
    expect(result).toEqual([]);
  });

  test("returns an empty array when input array is null or undefined", () => {
    expect(filter(null, () => true)).toEqual([]);
    expect(filter(undefined, () => true)).toEqual([]);
  });

  test("handles an empty array correctly", () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });

  test("predicate receives correct arguments", () => {
    const array = [10, 20, 30];
    const mockPredicate = jest.fn(() => true);

    filter(array, mockPredicate);

    expect(mockPredicate).toHaveBeenCalledTimes(3);
    expect(mockPredicate).toHaveBeenCalledWith(10, 0, array);
    expect(mockPredicate).toHaveBeenCalledWith(20, 1, array);
    expect(mockPredicate).toHaveBeenCalledWith(30, 2, array);
  });
});
