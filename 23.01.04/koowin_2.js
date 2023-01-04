function solution(s, e) {
    const diff = e - s
    if (diff <= 0) {
        return -diff
    }
    return Math.floor(diff / 5) + Math.min(diff % 5, 6 - diff % 5)
}

console.log(solution(5, 14))
console.log(solution(8, 3))