function solution(clothes) {
    const m = new Map();

    for (const cloth of clothes) {
        const clothType = cloth[1];
        const count = m.get(clothType) || 1;
        m.set(clothType, count + 1);
    }

    let counts = [...m.values()];
    console.log(counts)


    return counts.reduce(
        (a, b) => a * b
    ) - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));