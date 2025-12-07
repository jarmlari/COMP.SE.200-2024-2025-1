import capitalize from "../src/capitalize.js";

test('all lowercase', () => {
    expect(capitalize("kissa")).toBe("Kissa")
})

test('full sentence', () => {
    expect(capitalize("tulepas kalle juostaan pensaikon ympäri"))
    .toBe("Tulepas kalle juostaan pensaikon ympäri")
})

test('all uppercase', () => {
    expect(capitalize("PENSASMUSTIKKARASIAN KÄYTTÖOHJEET"))
    .toBe("Pensasmustikkarasian käyttöohjeet")
})

test('all lowercase, but the first letter', () => {
    expect(capitalize("kOIRAPUISTO")).toBe("Koirapuisto")
})

test('boolean as a parameter', () => {
    expect(capitalize(false)).toBeFalsy()
})

test('number as a parameter', () => {
    expect(capitalize(14560)).toBeFalsy()
})

test('array as a parameter', () => {
    let array = [1,2,3,4];
    expect(capitalize(array)).toBeFalsy()
})

test('empty parameter', () => {
    expect(capitalize()).toBeFalsy()
})