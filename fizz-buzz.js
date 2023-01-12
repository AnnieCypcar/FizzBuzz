const getFizzBuzzAnswer = (n) => {
    const answer = [];
    for (let i = 0; i < n; i+=1) {
        const num = i + 1;
        if (num > 1 && num % 3 === 0 && num % 5 === 0) {
            answer.push('FizzBuzz');
        } else if (num > 1 && num % 3 === 0) {
            answer.push('Fizz');
        } else if (num > 1 && i % 5 === 0) {
            answer.push('Buzz');
        } else {
            answer.push(`${num}`);
        }
    }
    return answer;
};
export const FizzBuzzController = {
    getAnswer: async (req, res) => {
        const { n } = req.body;
        const num = Number(n);
        if (isNaN(n) || !n || num < 1 || num > 1000) {
            throw new Error('A numerical input >= 1 and <= 1000 must be provided');
        }
        const answer = getFizzBuzzAnswer(num);
        res.status(200).send({ answer });
    }
};
