function solution(numbers) {
    let answer = 0;
    const isUsed = new Array(numbers.length).fill(false);
    const set = new Set();
    const isPrime = new Array(10000000).fill(true);

    // 에라토스테네스의 체
    function sieve(){
        isPrime[0] = isPrime[1] = false;
        for (let i = 4; i < isPrime.length; i += 2) {
            isPrime[i] = false;
        }
        for (let i = 3; i * i < isPrime.length; i += 2) {
            if (isPrime[i]) {
                for (let j = i + i; j < isPrime.length; j += i) {
                    isPrime[j] = false;
                }
            }
        }
    }
    sieve();
    function dfs(str, depth) {
        set.add(Number(str));

        for (let i = 0; i < numbers.length; i++) {
            if (!isUsed[i]) {
                isUsed[i] = true;
                dfs(str + numbers[i], depth + 1);
                isUsed[i] = false;
            }
        }
    }

    dfs("", 0);
    for (let i of set) {
        if(isPrime[i]) answer++;
    }
    return answer;
}