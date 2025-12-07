import isObject from "../src/isObject.js";


test('empty curly bracket', () => {
    expect(isObject({})).toBe(true);
})

test('array of three numbers', () => {
    expect(isObject([1, 2, 3])).toBe(true)
})

test('function keyword', () => {
    expect(isObject(Function)).toBe(true)
})

test('a short written function', () => {

    function add_test(arg1, arg2) {
        return arg1 + arg2;
    }

    expect(isObject(add_test)).toBe(true)

})

test('null value', () => {
    expect(isObject(null)).toBe(false)
})

test('number five', () => {
    expect(isObject(5)).toBe(false)
})

test('string of "dog"', () => {
    expect(isObject("dog")).toBe(false)
})

test('empty call', () => {
    expect(isObject()).toBe(false)
})