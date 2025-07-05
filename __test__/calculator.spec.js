const { StringCalculator } = require("../src/calculator.js");


describe('Basic Test', () => {
    test('test-1 : return 0 for empty string', () => {
        const calc = new StringCalculator()
        expect(calc.Add('')).toBe(0);
    })

    test('test-2 : return number for single input', () => {
        const calc = new StringCalculator()
        expect(calc.Add('1')).toBe(1)
    })

    test('test-3 : return sum of two numbers',() => {
        const calc = new StringCalculator()
        expect(calc.Add('1,2')).toBe(3)
    })
})


test('Task 2 :- Test for Unknown amount of Numbers' ,() => {
    const calc = new StringCalculator()
    expect(calc.Add('1,2,3')).toBe(6)
})

test('Task 3 :- Test for NewLine Between Numbers',() => {
    const calc = new StringCalculator()
    expect(calc.Add('1\n2,3')).toBe(6)
})

test('Task 4 :- Test for Support different Deliminators',() => {
    const calc = new StringCalculator()
    expect(calc.Add('//;\n1;2')).toBe(3)
})

test('Task 5 :- negative numbers not allowed', () => {
    const calc = new StringCalculator();
    expect(() => calc.Add("-1")).toThrow("negatives not allowed : -1");
});

test('Task - 6 :- multiple negative numbers , print them all', () => {
    const calc = new StringCalculator();
    expect(() => calc.Add("-1,-2,-3")).toThrow("negatives not allowed : -1,-2,-3");
});

test('Task - 9 :- number greater than 1000 should be ignored',() => {
    const calc = new StringCalculator()
    expect(calc.Add('1000,1,2,1001')).toBe(1003)
})
