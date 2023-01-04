function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;
  const queue = [];
  queue.push([0, 0, 1]);

  const dx = [-1, 0, 1, 0],
    dy = [0, 1, 0, -1];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current[0] === row - 1 && current[1] === col - 1) {
      return current[2];
    }
    maps[current[0]][current[1]] = 0;
    for (let i = 0; i < 4; i++) {
      let x = current[0] + dx[i];
      let y = current[1] + dy[i];
      if (x < row && x >= 0 && y < col && y >= 0 && maps[x][y])
        queue.push([x, y, current[2] + 1]);
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
