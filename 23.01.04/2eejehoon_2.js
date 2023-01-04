function solution(S, E) {
  const queue = [];
  const visit = Array(10000).fill(false);
  const jump = [1, -1, 5];
  queue.push([S, 0]);
  while (queue.length > 0) {
    const current = queue.shift();
    if (current[0] === E) return current[1];
    visit[current[0] - 1] = true;
    for (let x of jump) {
      S = current[0] + x;
      if (S > 0 && !visit[S - 1]) queue.push([S, current[1] + 1]);
    }
  }
}

console.log(solution(5, 14));
console.log(solution(8, 3));
