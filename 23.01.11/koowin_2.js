// [0,1,2,3,4,5 ... 1000000000000000000000000] x

function solution(n, times) {
    function isPass(t) {
        let sum = 0;
        for (let i = 0; i < times.length; i++) {
            sum += Math.floor(t / times[i]);         // i 번째 심사관이 t 초 동안 검사할 수 있는 사람 수
            if (sum >= n) {
                return true;
            }
        }
        return false;
    }

    let lo = 0, hi = Number.MAX_SAFE_INTEGER;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (isPass(mid)) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    if (isPass(lo)) {
        return lo;
    }
    return lo + 1;
}