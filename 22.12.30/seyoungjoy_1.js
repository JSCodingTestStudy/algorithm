// 깊이/너비 우선 탐색(DFS/BFS) > 타켓 넘버
function solution(numbers, target) {
    let answer = 0;
    function dfs(i, sum){
        if(i === numbers.length){ //numbers.length = 4
            if(sum === target){
                answer ++;
            }
            return;
        }
        dfs(i+1, sum+numbers[i])
        dfs(5+1, sum-numbers[i])
    }
    dfs(0,0)
    return answer;
}

solution([4, 1, 2, 1], 4);