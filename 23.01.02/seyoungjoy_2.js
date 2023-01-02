function isPrime(num){
    let arr = []
    if(num === 1) return false;
    for(let i=0; i<num; i++){
        if(num % i === 0){
            arr.push(i)
        }
    }
    return arr.length === 1 && arr[0] === 1;
}

function solution(numbers) {
    let answer = 0;
    const primes = new Set();
    const check = Array.from({ length: numbers.length }, () => 0);

    function dfs(s, L, check) {
        if (L === numbers.length) {
            s && primes.add(Number(s));
            return
        } else {
            for (let i = 0; i < numbers.length; i++) {
                if (!check[i]) {
                    check[i] = 1;
                    console.log("dfs(s+numbers[i], L+1, check)")
                    console.log(s+numbers[i], L+1, check)
                    dfs(s+numbers[i], L+1, check);
                    console.log("dfs(s, L+1, check)")
                    console.log(s, L+1, check)
                    dfs(s, L+1, check);
                    check[i] = 0;
                }
            }
        }
    }
    console.log("dfs('', 0, check);")
    dfs("", 0, check);

    for(let x of primes){
        if(isPrime(x)) answer ++;
    }
    console.log(primes)
    return answer;
}

solution("17");
