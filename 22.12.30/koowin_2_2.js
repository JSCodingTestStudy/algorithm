function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    function dfs(idx) {
        visited[idx] = true;

        for (let i = 0; i < n; i++) {
            if (computers[idx][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer++;
            dfs(i);
        }
    }

    return answer;
}
