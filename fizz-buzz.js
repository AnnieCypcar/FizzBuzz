const getFizzBuzzAnswer = (n) => {
    const answer = Array.from({length: n}, () => '0');
    for (let i = 1; i < n; i+=1) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer[i] = 'FizzBuzz';
        } else if (i % 3 === 0) {
            answer[i] = 'Fizz';
        } else if (i % 5 === 0) {
            answer[i] = 'Buzz';
        } else {
            answer[i] = `${i}`;
        }
    }
    return answer;
};
export const FizzBuzzController = {
    getAnswer: async (req, res) => {
        const { n } = req.body;
        const num = Number(n);
        if (isNaN(n) || !n || num < 1 || num > 1000) {
            throw new Error('A numerical input > 1 and < 1000 must be provided');
        }
        const answer = getFizzBuzzAnswer(num);

        res.status(200).send({ answer });
    }
};
