function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let divisor = 0; // 약수의 개수
    for (let j = 1; j <= Math.sqrt(i); j++) {
      // 제곱근까지만 반복
      if (i % j === 0) {
        divisor++; // 약수이면 divisor++
        if (i / j !== j) divisor++; // j가 약수일 때 나누어서 몫이 j와 같지 않다면, 그 수도 약수이므로 divisor++
      }
    }
    if (divisor > limit)
      answer = answer + power; // divisor 보다 limit이 크면 power를 더한다.
    else answer = answer + divisor; // 아니면, divisor를 더한다.
  }
  return answer;
}
console.log(solution(5, 3, 2)); // 10
