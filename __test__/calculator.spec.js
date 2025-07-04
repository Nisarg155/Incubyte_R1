const { StringCalculator } = require("../src/calculator.js");


describe('Basic Test', () => {
    test('test-1 : return 0 for empty string', () => {
        const calc = new StringCalculator()
        expect(calc.add('')).toBe(0);
    })

    test('test-2 : return number for single input', () => {
        const calc = new StringCalculator()
        expect(calc.add('1')).toBe(1)
    })

    test('test-3 : return sum of two numbers',() => {
        const calc = new StringCalculator()
        expect(calc.add('1,2')).toBe(3)
    })
})


test('Test for Unknown amount of Numbers' ,() => {
    const calc = new StringCalculator()
    expect(calc.add('1,2,3')).toBe(6)
})