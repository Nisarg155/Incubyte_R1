class StringCalculator {
    Add(numbers) {

        if (numbers === "")
            return 0;

        if (!numbers.includes(','))
            return parseInt(numbers)


        let nums = numbers.split(',')

        return nums.reduce((sum, num) => {
            if (num.length === 1) {
                sum += parseInt(num)
            } else {
                let [num1, num2] = num.split('\n')
                sum += parseInt(num1) + parseInt(num2)
            }
            return sum
        }, 0)

    }
}

module.exports = {StringCalculator}