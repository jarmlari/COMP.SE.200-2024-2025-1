import add from "../src/add.js";

test('add two zeros', () => {
    expect(add(0,0)).toBe(0)
})

test('add two small numbers', () => {
    expect(add(6,4)).toBe(10)
})

// -30 + 20
test('addition with a negative number', () => {
    expect(add(-30,20)).toBe(-10)
})

// add(3.023, 1.1) palauttaa 4.123. 
test('adding fractions', () => {
    expect(add(3.023, 1.1)).toBe(4.123)
})


test('adding large numbers', () => {
    expect(add(1000000000, 10)).toBe(1000000010)
})

test('adding a very small number', () => {
    expect(add(-1000000000, 10)).toBe(-999999990)
})

// Giving something else then a number as parameter should return false.
test('string parameter', () => {
    expect(add(1, "string")).toBeFalsy()
})

test('boolean and string parameters', () => {
    expect(add(false, "123")).toBeFalsy()
})

