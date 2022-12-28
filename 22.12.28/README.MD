# 완전 탐색(Brute-Force)

## 완전 탐색이란?

- 모든 경우에 수를 모두 탐색 해보는 방법

## 시간계산 (만약 시간 제한이 1초라면)

- O(N) : 보통 1억 요소
- O(NlogN): 5백만 요소
- O(N^2) : 1만 요소
- O(N!) : 11개 요소의 계산

## 완전 탐색 종류

1. 단순 Brute-Force
2. 비트 마스크(Bitmask)
3. 재귀 함수
4. 순열 (Permutation)
5. BFS/DFS


## 완전 탐색 풀이 과정

1. 가능한 모든 가짓수를 계산해본다
2. 어떤 식으로 구현을 할지 생각한다

- 단순 for문 : 간단한 문제
- 순열 : 서로 다른 N개를 일렬로 나열(순서를 알고 싶은 문제)
- 재귀(백트래킹) : 완전 탐색을 하는 도중, 현재 탐색이 무의미한 경우 되돌아가는 알고리즘(가지치기를 해야하는 상황)

<img width="606" alt="image" src="https://user-images.githubusercontent.com/87470206/209665321-73eacee7-f274-4280-a87c-8c830d4f5162.png">

<왼쪽은 깊이 우선으로 모두 검색하는 DFS 방식, 오른쪽은 무의미한 탐색을 건너가는 방법(백트래킹)>

## 문제풀이를를 통한 완전 탐색 이해하기

---

### 프로그래머스 최소직사각형(Brute-Force lv.1)

- 제한 사항에서 sizes의 길이는 1 이상 10,000 이하입니다
- 이부분을 통해 이중 for문 일경우 (최대 10,000 \* 10,000 = 1억회) 약 1초정도 소요되는 문제기 떄문에 크게 문제가 없을경우 for문으로 풀어도 된다고 파악함.

```js
function solution(sizes) {
  let answer = 0;

  let largeMax = 0;
  let smallMax = 0;
  sizes.forEach((el) => {
    let [a, b] = el.sort((a, b) => a - b);
    if (largeMax < b) largeMax = b;
    if (smallMax < a) smallMax = a;
  });

  return largeMax * smallMax;
}
```

---

### 프로그래머스 모의고사(Brute-Force lv.1)

- 해당 문제도 제한 사항이 "시험은 최대 10,000 문제로 구성되어있습니다."를 확인하고 우선 for문으로 접근
- for문으로도 풀리는 문제 이므로 다른 방식 적용 안함.

```js
function solution(answers) {
  var answer = [];
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let p1c = 0;
  let p2c = 0;
  let p3c = 0;

  for (let i = 0; i < answers.length; i++) {
    let p1Idx = i % p1.length;
    let p2Idx = i % p2.length;
    let p3Idx = i % p3.length;
    if (answers[i] === p1[p1Idx]) p1c++;
    if (answers[i] === p2[p2Idx]) p2c++;
    if (answers[i] === p3[p3Idx]) p3c++;
  }
  let max = 0;
  for (let el of [p1c, p2c, p3c]) {
    if (el >= max) max = el;
  }

  let count = 0;
  for (let el of [p1c, p2c, p3c]) {
    count++;
    if (el === max) answer.push(count);
  }

  return answer;
}
```

---

### LeetCode 21. Merge Two Sorted Lists (재귀 함수: Recursion)

문제

- You are given the heads of two sorted linked lists list1 and list2.
- Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
- Return the head of the merged linked list.

Example:
| Input | Output |
| -------------------------- | ------------- |
| l1 = [1,2,4], l2 = [1,3,4] | [1,1,2,3,4,4] |
| l1 = [], l2 = [] | [] |
| l1 = [], l2 = [0] | [0] |

- solve.1 new ListNode()로 풀기 => Brute-Forece

```js
var mergeTwoLists = function (l1, l2) {
  let merge = new ListNode();
  let head = merge;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merge.next = l1;
      l1 = l1.next;
    } else {
      merge.next = l2;
      l2 = l2.next;
    }
    merge = merge.next;
  }

  if (!l1) {
    merge.next = l2;
  } else if (!l2) {
    merge.next = l1;
  }
  return head.next;
};
```

- solve.2 재귀를 활용하여 풀기

```js
let mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
```

### 이진수 출력(재귀)

문제

- 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.

```js
function solution3(num) {
  let answer = "";

  function DFS(num) {
    if (num === 0) return;
    else {
      DFS(Math.floor(num / 2));
      answer += num % 2;
    }
  }

  DFS(num);
  return +answer;
}
```




### **Guide : 재귀적으로 사고하기**

### **1. 재귀 함수의 입력값과 출력값 정의하기**

재귀 함수를 통해 풀고자 하는 문제, 즉 도달하고자 하는 목표를 정의하는 데 도움이 됩니다. 재귀적으로 사고하는 데에 가장 먼저 해야 할 일은 문제를 가장 추상적으로 또는, 가장 단순하게 정의하는 것입니다. 함수 arrSum의 경우 `number` 타입을 요소로 갖는 배열을 입력으로 받고, `number` 타입을 리턴합니다. 이를 좀 더 간단하게 표기하면 다음과 같습니다.

- `arrSum: [number] => number`

### **2. 문제를 쪼개고 경우의 수를 나누기**

주어진 문제를 어떻게 쪼갤 것인지 고민합니다. 문제를 쪼갤 기준을 정하고, 정한 기준에 따라 문제를 더 큰 경우와 작은 경우로 구분할 수 있는지 확인합니다. 일반적인 경우, 입력값으로 이 기준을 정합니다. 이때 중요한 관점은 **입력값이나 문제의 순서와 크기**입니다. 주어진 입력값 또는 문제 상황을 크기로 구분할 수 있거나, 순서를 명확하게 정할 수 있다면 문제를 구분하는 데 도움이 됩니다. 그리고 구분된 문제를 푸는 방식이 순서나 크기에 관계없이 모두 같다면, 문제를 제대로 구분한 것입니다.

- 함수 `arrSum` 의 경우 입력값인 리스트(배열)의 크기에 따라, 더 작은 문제로 나눌 수 있습니다. 그리고 `arrSum([1, 2, 3, 4])` 를 구하는 방법과 `arrSum([2, 3, 4])` 을 구하는 방법은 동일하므로, 이 구분은 적절하다고 판단할 수 있습니다.

이제 문제에서 주어진 입력값에 따라, 경우의 수를 나눕니다. 일반적으로 문제를 더 이상 쪼갤 수 없는 경우와 그렇지 않은 경우로 나눕니다.

- 함수 `arrSum`은 입력값이 빈 배열인 경우와 그렇지 않은 경우로 나눌 수 있습니다. 각각의 경우는 다른 방식으로 처리해야 합니다.
- `arrSum: [number] => numberarrSum([ ])arrSum([e1, e2, ... , en])`

### **3. 단순한 문제 해결하기**

문제를 여러 경우로 구분한 다음에는, 가장 해결하기 쉬운 문제부터 해결합니다. 이를 재귀의 기초(base case)이라고 부릅니다. 재귀의 기초는 나중에 재귀 함수를 구현할 때, 재귀의 탈출 조건(재귀 호출이 멈추는 조건)을 구성합니다.

- 함수 `arrSum` 을 더 이상 쪼갤 수 없는 경우는 입력값이 빈 배열일 경우이고, 이때 `arrSum([])` 의 리턴값은 0입니다.
- `arrSum: [number] => numberarrSum([ ]) = 0arrSum([e1, e2, ... , en])`

### **4. 복잡한 문제 해결하기**

남아있는 복잡한 경우를 해결합니다.

- 길이가 1 이상인 배열이 함수 `arrSum` 에 입력된 경우, 맨 앞의 요소에 대한 결과를 따로 구하고(배열의 맨 앞의 요소이기 때문에 `head`라고 이름 붙이겠습니다.), 나머지 요소를 새로운 입력값으로 갖는 문제로 구분하고, 이를 해결하여 얻은 결과를 `head`에 더합니다.
- `arrSum: [number] => numberarrSum([ ]) = 0arrSum([e1, e2, ... , en]) = e1 + arrSum([e2, ..., en])`
- 배열을 `head`와 나머지 부분(`tail`)으로 구분하는 방법만 안다면, 함수 arrSum을 재귀적으로 구현할 수 있습니다.

```js
function arrSum(arr) {
  //Base Case : 문제를 더 이상 쪼갤 수 없는 경우 (재귀의 기초)
  if (arr의 길이가 0인 경우) {
    return 0;
  }
  /*
  * Recursive Case : 그렇지 않은 경우
  * 문제를 더 이상 쪼갤 수 없는 경우
  * head: 배열의 첫 요소
  * tail: 배열의 첫 요소만 제거된 배열
  */
  return head + arrSum(tail);
}
```

- 재귀 함수의 일반적인 템플릿.

```js
function recursive(input1, input2, ...) {
  // Base Case : 문제를 더 이상 쪼갤 수 없는 경우
  if (문제를 더 이상 쪼갤 수 없을 경우) {
    return 단순한 문제의 해답;
  }
  // recursive Case
  // 그렇지 않은 경우
  return 더 작은 문제로 새롭게 정의된 문제
  // 예1. someValue + recursive(input1Changed, input2Changed, ...)
  // 예2. someValue * recursive(input1Changed, input2Changed, ...)
}
```
