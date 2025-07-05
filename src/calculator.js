class StringCalculator {
    Add(numbers) {
        if (numbers === "")
            return 0;

        let delimiter = ',';

        if (numbers.substring(0, 2) === "//") {
            delimiter = numbers[2];
            numbers = numbers.substring(4);
        }
        numbers = numbers.replace(/\n/g, delimiter);
        let nums = numbers.split(delimiter);

        return nums.reduce((sum, num) => {
            return sum + parseInt(num);
        }, 0);
    }
}

module.exports = { StringCalculator };
