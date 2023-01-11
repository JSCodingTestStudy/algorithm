import {Queue} from "./koowin_queue.js";
function solution(s, e) {
    let count = 0;
    const q = new Queue();
    const dp = new Array(Math.max(s, e) + 1).fill(Number.MAX_SAFE_INTEGER);
    q.offerLast([s, 0]);

    while (q.len !== 0) {
        const move = q.pollFirst();
        if (move[0] < 0) {
            continue;
        }

        count++;
        if (move[0] === e) {
            console.log(count);
            return move[1];
        }

        if (move[1] < dp[move[0]]) {
            dp[move[0]] = move[1];
            q.offerLast([move[0] + 1, move[1] + 1]);
            q.offerLast([move[0] + 5, move[1] + 1]);
            q.offerLast([move[0] - 1, move[1] + 1]);
        }
    }
}

console.log(solution(5, 14));