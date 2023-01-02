// 프로그래머스 - 타겟 넘버
// dfs를 이용하여 하나씩 완전 탐색을 하는 방식으로 진행
// 하나의 자리를 +하냐 -하냐 하는 두가지 선택지 => binary tree.. 맞나?
// [+, +, +, +, +]

// solve.1 fail
function solution(numbers, target) {
  var answer = 0;

  function dfs(vertex, sum) {
    if (vertex >= numbers.length) {
      if (sum === target) {
        answer++;
        console.log("vertex", vertex);
        console.log("sum", sum);
      } else return; // 써도되고 안써도 되고
    } else {
      dfs(vertex + 1, (sum += numbers[vertex]));
      dfs(vertex + 1, (sum -= numbers[vertex]));
    }
  }

  dfs(0, 0);
  return answer;
}

// solve.2 pass
function solution(numbers, target) {
  var answer = 0;

  function dfs(vertex, sum) {
    if (vertex >= numbers.length) {
      if (sum === target) {
        answer++;
      } else return;
    } else {
      dfs(vertex + 1, (sum += numbers[vertex]));
      sum -= numbers[vertex];
      dfs(vertex + 1, (sum -= numbers[vertex]));
      sum += numbers[vertex];
    }
  }

  dfs(0, 0);
  return answer;
}

// solve.3 refactoring
function solution(numbers, target) {
  var answer = 0;

  function dfs(idx, sum) {
    if (idx === numbers.length) {
      if (sum === target) {
        answer++;
      } else return;
    } else {
      dfs(idx + 1, sum + numbers[idx]);
      dfs(idx + 1, sum - numbers[idx]);
    }
  }

  dfs(0, 0);
  return answer;
}
