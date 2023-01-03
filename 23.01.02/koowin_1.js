function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];

    const set = new Set();
    const isVisited = new Array(words.length).fill(false);
    function dfs(str) {
        set.add(str);

        for (let i = 0; i < words.length; i++) {
            if (!isVisited[i]) {
                isVisited[i] = true;
                dfs(str + words[i]);
                isVisited[i] = false;
            }
        }
    }

    dfs("");

    let answer = 0;
    for (const b of babbling) {
        if (set.has(b)) {
            answer++;
        }
    }
    return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"],1));