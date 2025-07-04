

describe('Basic Test',() => {
    test('test-1 : return 0 for empty string',() => {
        const calc = new StringCalculator()
        expect(calc.add('')).toBe(0);
    })
})