// 프로그래머스 - 네트워크

// PseudoCode
// 1. computer 1번부터 연결된 모든(갔던곳을 제외한) 컴퓨터를 탐색한다.
// 1-1. 갔던곳은 갔었다고 check한다. => 여기선 graph자체를 주어주기 때문에 1을 0으로 바꿔준다.
// 2. 더이상 갈수 있는 곳이 없다면 count++
// 3. return count
function solution(n, computers) {
  let answer = 0;

  function dfs(currentPoint) {
    for (let i = 0; i < n; i++) {
      if (computers[currentPoint][i] === 1) {
        computers[currentPoint][i] = 0;
        computers[i][currentPoint] = 0;
        dfs(i);
      }
    }
  }

  for (let idx = 0; idx < computers.length; idx++) {
    if (computers[idx][idx] !== 0) {
      dfs(idx);
      answer++;
    }
  }

  return answer;
}
