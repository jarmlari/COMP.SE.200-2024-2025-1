import get from "../src/get.js";


const object = { 'a': [{ 'b': { 'c': 3 } }] }
const object2 = {'a': {}, 
                "dog": "very good boy", 
                3: "amount of apples", 
                "car": "toyota yaris"}



test('get first example', () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
})

test('get second example', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
})

test('get third example', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default')
})

test('get a value with a name field', () => {
    expect(get(object2, '["dog"]')).toBe("very good boy")
})



/**
 * { 'a': 
 *      [
 *          { 
 *              'b': 
 *                      { 'c': 3 } }] }
 */


