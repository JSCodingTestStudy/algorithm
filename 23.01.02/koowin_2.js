function solution(numbers) {
    let answer = 0;
    const isUsed = new Array(numbers.length).fill(false);
    const set = new Set();

    function dfs(str) {
        set.add(Number(str));

        for (let i = 0; i < numbers.length; i++) {
            if (!isUsed[i]) {
                isUsed[i] = true;
                dfs(str + numbers[i]);
                isUsed[i] = false;
            }
        }
    }

    dfs("");
    for (let i of set) {
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

