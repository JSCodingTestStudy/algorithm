// dfs 연습이니 dfs 로 풀어보시는 걸 추천드립니다.
// 아기가 할 수 있는 말이 "aya", "ye", "woo", "ma" 4가지인데, 이 4가지로 만들 수 있는 모든 단어를 dfs 로 구하고 map 에 저장해서 풀어보세요~

// 4개중 하나씩 최대 한번 사용 + 순서는 달라도 가능

function solution(babbling) {
  let answer = 0;
  let baby = ["aya", "ye", "woo", "ma"];
  let memo = [];
  let check = Array(4).fill(false);

  function dfs(vertex, str) {
    if (vertex === baby.length) {
      memo.push(str);
    } else {
      for (let j = 0; j < baby.length; j++) {
        if (!check[j]) check[j] = true;
        dfs(vertex + 1, str + baby[j]);
        check[j] = false;
        dfs(vertex + 1, str + "");
      }
    }
  }

  dfs(0, "");

  for (let i = 0; i < babbling.length; i++) {
    if (memo.includes(babbling[i])) answer++;
  }

  return answer;
}
