function solution(N, number) {
  const queue = [];
  const visit = Array(32000).fill(false);

  queue.push([N, 1]);

  while (queue.length > 0) {
    const current = queue.shift();
    if (current[1] > 8) return -1;
    current[0] = eval(current[0]);
    visit[current[0] - 1] = true;
    if (current[0] === number) return current[1];
    else {
      if (!visit[eval(`${current[0]} + ${N}`)]) {
        queue.push([`${current[0]} + ${N}`, current[1] + 1]);
      }
      if (!visit[`(${current[0]} / ${N})`]) {
        queue.push([`(${current[0]} / ${N})`, current[1] + 1]);
      }
      if (!visit[`${current[0]}${N}`]) {
        queue.push([`${current[0]}${N}`, current[1] + 1]);
      }
    }
  }
}

console.log(solution(5, 12));
