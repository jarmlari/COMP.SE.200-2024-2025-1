import chunk from '../src/chunk.js';


// Positive tests.
test('array of four items with chunk of two', () => {
    let array1 = ['a', 'b', 'c', 'd'];
    expect(chunk(array1, 2)).toEqual([['a', 'b'], ['c', 'd']])
})

test('example 2 chunk', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toBe([['a', 'b', 'c'], ['d']])
})

test('example 2 chunk strict equal', () => {
    let array1 = ['a', 'b', 'c', 'd'];
    expect(chunk(array1, 3)).toStrictEqual([['a', 'b', 'c'], ['d']])
})

test('long array of numbers', () => {
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,
        22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
    let expected_array = [[1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36],
        [37, 38, 39, 40]];
    expect(chunk(array, 6)).toEqual(expected_array)
})

// Negative tests. Wrong parameter types.
test('strings as both parameters', () => {
    expect(chunk("potato", "carrot")).toBeFalsy();
})

test('string as 2nd parameter', () => {

    let array1 = ['a', 'b', 'c', 'd'];
    expect(chunk(array1, "string")).toBeFalsy();
})

test('string as 1st parameter', () => {
    expect(chunk("string", 2)).toBeFalsy();
})

