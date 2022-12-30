function solution(numbers, target){
	let answer = 0;

    function dfs(index, num) {
        if (index === numbers.length) {
            if (num === target) {
                answer++;
            }
            return;
        }

        dfs(index + 1, num + numbers[index]);
        dfs(index + 1, num - numbers[index]);
    }

    dfs(0, 0);
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));