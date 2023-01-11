function solution(number, k) {
    const answer = [number.at(0)];

    for (let i = 1; i < number.length; i++) {
        while (answer.length && k && answer.at(-1) < number.at(i)) {
            answer.pop();
            k--;
        }
        answer.push(number.at(i));
    }
    while (k) {
        answer.pop();
        k--;
    }

    return answer.join('');
}

console.log(solution("1231234", 3));