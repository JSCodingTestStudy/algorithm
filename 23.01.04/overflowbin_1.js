function solution(maps) {
  let maxX = maps.length - 1;
  let maxY = maps[0].length - 1;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let count = 1;

  const queue = [[0, 0]];

  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        if (
          nx >= 0 &&
          nx <= maxX &&
          ny >= 0 &&
          ny <= maxY &&
          maps[nx][ny] === 1
        ) {
          if (nx === maxX && ny === maxY) {
            return ++count;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
    }

    count++;
  }

  return -1;
}
