import add from "../src/add.js";

describe('add', () => {
  describe('perus yhteenlaskutestit', () => {
    it('laskee yhteen kaksi positiivista kokonaislukua', () => {
      expect(add(6, 4)).toBe(10)
    })

    it('laskee yhteen kaksi negatiivista kokonaislukua', () => {
      expect(add(-5, -3)).toBe(-8)
    })

    it('laskee yhteen positiivisen ja negatiivisen luvun', () => {
      expect(add(10, -3)).toBe(7)
      expect(add(-10, 3)).toBe(-7)
    })

    it('laskee yhteen desimaaliluvut', () => {
      expect(add(1.5, 2.3)).toBeCloseTo(3.8)
      expect(add(0.1, 0.2)).toBeCloseTo(0.3)
    })

    it('palauttaa saman luvun kun toinen operandi on nolla', () => {
      expect(add(5, 0)).toBe(5)
      expect(add(0, 5)).toBe(5)
    })

    it('palauttaa nollan kun molemmat operandit ovat nolla', () => {
      expect(add(0, 0)).toBe(0)
    })
  })

  describe('erikoistapaukset', () => {
    it('käsittelee erittäin suuria lukuja', () => {
      expect(add(Number.MAX_SAFE_INTEGER, 0)).toBe(Number.MAX_SAFE_INTEGER)
      expect(add(1e10, 2e10)).toBe(3e10)
    })

    it('käsittelee erittäin pieniä lukuja', () => {
      expect(add(Number.MIN_SAFE_INTEGER, 0)).toBe(Number.MIN_SAFE_INTEGER)
    })

    it('käsittelee Infinity-arvot', () => {
      expect(add(Infinity, 5)).toBe(Infinity)
      expect(add(5, Infinity)).toBe(Infinity)
      expect(add(Infinity, Infinity)).toBe(Infinity)
    })

    it('käsittelee -Infinity-arvot', () => {
      expect(add(-Infinity, 5)).toBe(-Infinity)
      expect(add(5, -Infinity)).toBe(-Infinity)
      expect(add(-Infinity, -Infinity)).toBe(-Infinity)
    })

    it('palauttaa NaN kun Infinity ja -Infinity lasketaan yhteen', () => {
      expect(add(Infinity, -Infinity)).toBeNaN()
      expect(add(-Infinity, Infinity)).toBeNaN()
    })

    it('käsittelee NaN-arvot', () => {
      expect(add(NaN, 5)).toBeNaN()
      expect(add(5, NaN)).toBeNaN()
      expect(add(NaN, NaN)).toBeNaN()
    })

    it('käsittelee negatiivisen nollan', () => {
      expect(add(-0, 0)).toBe(0)
      expect(add(0, -0)).toBe(0)
      expect(add(-0, -0)).toBe(-0)
    })
  })

  describe('tyyppien muunnokset', () => {
    it('muuntaa merkkijonot numeroiksi', () => {
      expect(add('6', '4')).toBe(10)
      expect(add('10', 5)).toBe(15)
      expect(add(5, '10')).toBe(15)
    })

    it('käsittelee tyhjät merkkijonot nollana', () => {
      expect(add('', 5)).toBe(5)
      expect(add(5, '')).toBe(5)
    })

    it('käsittelee boolean-arvot numeroina', () => {
      expect(add(true, 5)).toBe(6)
      expect(add(false, 5)).toBe(5)
      expect(add(true, true)).toBe(2)
    })

    it('käsittelee null-arvon nollana', () => {
      expect(add(null, 5)).toBe(5)
      expect(add(5, null)).toBe(5)
    })

    it('palauttaa NaN virheellisille merkkijonoille', () => {
      expect(add('abc', 5)).toBeNaN()
      expect(add(5, 'xyz')).toBeNaN()
    })

    it('käsittelee undefined-arvot', () => {
      expect(add(undefined, 5)).toBeNaN()
      expect(add(5, undefined)).toBeNaN()
    })
  })

  describe('edge case -testit', () => {
    it('toimii ilman argumentteja', () => {
      expect(add()).toBeNaN()
    })

    it('toimii yhdellä argumentilla', () => {
      expect(add(5)).toBeNaN()
    })

    it('käsittelee liukulukujen tarkkuusongelmat', () => {
      // JavaScript-tunnettu ongelma: 0.1 + 0.2 !== 0.3
      const result = add(0.1, 0.2)
      expect(result).toBeCloseTo(0.3, 10)
    })
  })
})