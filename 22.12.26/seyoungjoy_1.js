// 정렬 > 가장 큰 수
function solution(numbers) {
    const answer =  numbers.map((number) => number.toString()).sort((a,b) => (b+a)-(a+b)).join("");
    return answer[0] === "0" ? "0" : answer;
}

console.log(solution([3, 30, 34, 5, 9]));

// test 11 실패
function solution1(numbers) {
    return numbers.map((number) => number.toString()).sort((a,b) => (b+a)-(a+b)).join("");
}

console.log(solution([0, 30, 40, 5, 9]));