function solution(n, computers) {
  let answer = 0;
  let visit = [];

  for (let i = 0; i < n; i++) {
    visit.push(false);
  }

  function dfs(idx) {
    visit[idx] = true;

    for (let i = 0; i < n; i++) {
      if (computers[idx][i] === 1 && !visit[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
