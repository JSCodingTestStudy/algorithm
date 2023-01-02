function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  function dfs(idx, sum) {
    if (idx === length) {
      if (sum === target) answer++;
      return;
    }
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }
  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
