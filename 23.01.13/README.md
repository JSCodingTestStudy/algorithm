## DP (Dynamic Programming / 동적계회법)

- 프로그래머스
  불필요한 계산을 줄이고, 효율적으로 최적해를 찾아야만 풀리는 문제
  출제 빈도 낮음, 평균 점수 낮음

- 유튜버 동빈나
  DP란 하나의 문제를 단 한 번만 풀도록 하는 알고리즘
  한 번 수행한 연산은 반복하지 않도록 하는 것이 핵심

- 유튜버 개발자로 취직하기
  완전탐색, DFS, BFS 등 수많은 경우의 수를 따져봐야 하는 문제에서 수행시간을 단축하기 위해 사용

## 접근법/DP를 알아보는 방법

- DFS/BFS로 풀 수 있지만 경우의 수가 너무 많은 경우
- 중복 연산이 많은 경우
- 최대한 많은 문제를 풀면서 DP식 사고방식을 터득

## 풀이방법

연산한 내용을 기억해놓고 다음에도 그 연산이 필요할 때 기억해 놓은 값을 사용해서 문제를 푸는 방법

### 재귀

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

시간복잡도 O(2^n)
[피보나치 이미지](https://www.baeldung.com/wp-content/uploads/sites/4/2020/06/Fibonacci-top-down.svg)

### 메모이제이션(Memoization)

```javascript
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}
```

시간복잡도 O(2N)
[top-down 이미지](https://www.baeldung.com/wp-content/uploads/sites/4/2020/06/Fibonacci-memoization.svg)

### 반복문

```javascript
function fibonacci(n) {
  const arr = Array(n + 1).fill(0);
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
}

function fibonacci(n) {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
```

시간복잡도 O(N)
[bottom-up 이미지](https://www.baeldung.com/wp-content/uploads/sites/4/2020/06/Fibonacci-bottom-up-1.svg)

[출처:](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e)
(https://www.baeldung.com/cs/fibonacci-top-down-vs-bottom-up-dynamic-programming)
