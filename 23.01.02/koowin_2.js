function solution(numbers) {
    let answer = 0;
    const isUsed = new Array(numbers.length).fill(false);
    const m = new Map();
    function dfs(str, depth) {
        m.set(Number(str), true);

        for (let i = 0; i < numbers.length; i++) {
            if (!isUsed[i]) {
                isUsed[i] = true;
                dfs(str + numbers[i], depth + 1);
                isUsed[i] = false;
            }
        }
    }

    dfs("", 0);
    for (let i of m.keys()) {
        if(isPrime(i)) answer++;
    }
    return answer;
}

function isPrime(n) {
    if(n <= 1) {
        return false;
    }
    for(let i = 2; i * i <= n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}