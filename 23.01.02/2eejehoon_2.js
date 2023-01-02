function solution(numbers) {
  let answer = 0;
  numbers = numbers.split("");
  const length = numbers.length;
  const arr = [];
  const visit = [];
  for (let i = 0; i < length; i++) {
    visit.push(false);
  }

  function dfs(idx, number) {
    if (idx === length + 1) return;
    if (!arr.includes(Number(number))) arr.push(Number(number));
    for (let i = 0; i < length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        dfs(idx + 1, number + numbers[i]);
        visit[i] = false;
      }
    }
  }
  dfs(0, "");

  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let x of arr) {
    if (isPrime(x)) answer++;
  }

  return answer;
}

console.log(solution("17"));
console.log(solution("011"));
