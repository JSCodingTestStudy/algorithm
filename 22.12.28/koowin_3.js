function solution(word) {
    const cost = new Array(5);
    const alp = "AEIOU";
    cost[4] = 1;
    for (let i = 3; i >= 0; i--) {
        cost[i] = cost[i+1] * 5 + 1;
    }

    let answer = word.length;
    for (let i = 0;i<word.length;i++) {
        answer += alp.indexOf(word[i]) * cost[i]
    }
    return answer;
}

console.log(solution("AAI"));