class StringCalculator{
    add(numbers)
    {
        if(numbers === "")
            return 0;

        if(!numbers.includes(','))
            return parseInt(numbers);

        let [num1,num2] = numbers.split(',')
        return parseInt(num1)+parseInt(num2)

    }
}

module.exports = {StringCalculator}