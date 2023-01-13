function solution(N, number) {
    const arithmetics = [
        (a, b) => (a + b),
        (a, b) => (a - b),
        (a, b) => (a * b),
        (a, b) => (Math.floor(a / b))
    ];
    const arr = Array.from({length: 9}, () => new Set());

    for (let i = 1, straight = N; i <= 8; i++, straight = straight * 10 + N) {
        arr[i].add(straight);
        for (let j = 1; j < i; j++) {
            for (const n1 of arr[j]) {
                for (const n2 of arr[i - j]) {
                    for (const f of arithmetics) {
                        const r = f(n1, n2);
                        if (r > 0) {
                            arr[i].add(r);
                        }
                    }
                }
            }
        }

        if (arr[i].has(number)) {
            return i;
        }
    }

    return -1;
}

console.log(5, 12);