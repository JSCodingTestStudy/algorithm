function solution(babbling) {
  let answer = 0;
  const a = ["aya", "ye", "woo", "ma"];
  const b = [];
  const visit = [];

  for (let i = 0; i < a.length; i++) visit.push(false);

  function dfs(idx, word) {
    if (!b.includes(word)) b.push(word);
    if (idx === a.length) return;
    for (let i = 0; i < a.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        dfs(idx + 1, word + a[i]);
        visit[i] = false;
      }
    }
  }
  dfs(0, "");

  for (let x of babbling) {
    if (b.includes(x)) answer++;
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
