import Queue from './koowin_queue.js';
function solution(maps) {
    maps = maps.map(arr => arr.map(x => x === 1 ? Number.MAX_SAFE_INTEGER : 0));

    const queue = new Queue();
    queue.offerLast([0, 0, 1]);

    while (queue.len !== 0) {
        const move = queue.pollFirst();
        const x = move[0];
        const y = move[1];
        if (maps[x][y] > move[2]) {
            maps[x][y] = move[2];

            // up
            if (x - 1 >= 0 && maps[x - 1][y] !== 0) {
                queue.offerLast([x - 1, y, move[2] + 1]);
            }

            // down
            if (x + 1 < maps.length && maps[x + 1][y] !== 0) {
                queue.offerLast([x + 1, y, move[2] + 1]);
            }

            // left
            if (y - 1 >= 0 && maps[x][y - 1] !== 0) {
                queue.offerLast([x, y - 1, move[2] + 1]);
            }

            // right
            if (y + 1 < maps[0].length && maps[x][y + 1] !== 0) {
                queue.offerLast([x, y + 1, move[2] + 1]);
            }

        }
    }

    const answer = maps.at(-1).at(-1);
    return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]))
console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]))