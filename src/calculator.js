class StringCalculator {
    Add(numbers) {
        if (numbers === "")
            return 0;

        let delimiter = ',';
        let negatives = []
            if (numbers.substring(0, 2) === "//") {
                delimiter = numbers[2];
                numbers = numbers.substring(4);
            }
            numbers = numbers.replace(/\n/g, delimiter);
            let nums = numbers.split(delimiter);

            let answer = nums.reduce((sum, num) => {
                let n = parseInt(num)
                if(n < 0) negatives.push(n)
                if(n>1000) return sum
                return sum + n;
            }, 0);

            if(negatives.length >= 1) throw new Error(`negatives not allowed : ${negatives.join(',')}`)
            return answer

    }
}

module.exports = { StringCalculator };
