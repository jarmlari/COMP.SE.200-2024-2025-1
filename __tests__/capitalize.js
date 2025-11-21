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