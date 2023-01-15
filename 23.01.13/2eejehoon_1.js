var generateParenthesis = function (n) {
  const visit = Array(n * 2).fill(false);
  const parenthesis = [];
  const result = [];

  for (let i = 0; i < n * 2; i++) {
    if (i >= n) parenthesis.push(")");
    else parenthesis.push("(");
  }

  function dfs(str) {
    if (str.length === n * 2) {
      set.add(str);
      return;
    }
    for (let i = 0; i < n * 2; i++) {
      if (!visit[i]) {
        visit[i] = true;
        dfs(str + parenthesis[i]);
        visit[i] = false;
      }
    }
  }
  dfs("", []);
};

console.log(generateParenthesis(3));
