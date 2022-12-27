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

## 문제풀이를를 통한 완전 탐색 이해하기

---

### 프로그래머스 최소직사각형(Brute-Force lv.1)

- 제한 사항에서 sizes의 길이는 1 이상 10,000 이하입니다
- 이부분을 통해 이중 for문 일경우 (최대 10,000 \* 10,000 = 1억회) 약 1초정도 소요되는 문제기 떄문에 크게 문제가 없을경우 for문으로 풀어도 된다고 파악함.

```jsx
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

```jsx
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

```jsx
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

```jsx
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

```jsx
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
