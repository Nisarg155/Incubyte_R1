class StringCalculator{
    add(numbers)
    {

        if(numbers === "")
            return 0;

        if(!numbers.includes(','))
            return parseInt(numbers)

        let nums = numbers.split(',')
        let sum = 0
        nums.forEach((num) => {
            sum += parseInt(num)
        } )

        return sum

    }
}

module.exports = {StringCalculator}