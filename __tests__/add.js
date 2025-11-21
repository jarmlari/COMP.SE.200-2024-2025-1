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

