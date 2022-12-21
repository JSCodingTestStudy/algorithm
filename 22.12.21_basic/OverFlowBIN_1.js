// anagram 판별하기
// silent  <-> listen

// pesudocode
// 2가지 방법
// 1. method 이용한 방법 (split, sort)
// 2. hashMap
// {s: 1, i:1, l:1, e:1, n:1, t:1} => listen for문을 돌아서 검색하고, hashMap 수정

const strA = "silents";
const strB = "listen";

// solve.1 array method를 활용한 방법
function solution1(strA, strB) {
  return strA.split("").sort().join() === strB.split("").sort().join();
}

// solve.1 array method를 활용한 방법
function solution2(strA, strB) {
  if (strA.length !== strB.length) return false;

  const hashMap = {};

  for (const el of strA) {
    // if (!hashMap[el]) hashMap[el] = 1;
    // else hashMap[el]++;
    hashMap[el] = hashMap[el] ? hashMap[el] + 1 : 1;
  }

  // { s: 1, i: 1, l: 0, e: 1, n: 1, t: 1 }
  for (const el of strB) {
    if (!hashMap[el]) return false; // undefined or 0일떄 조건문이 걸리니깐
    hashMap[el]--;
  }

  return true;
}

// new Map() => 추가해서 git 올리기
function solution3(strA, strB) {
  if (strA.length !== strB.length) return false;

  const hashMap = new Map();

  for (const el of strA) {
    // if (!hashMap[el]) hashMap[el] = 1;
    // else hashMap[el]++;
    if (!hashMap.get(el)) hashMap.set(el, 1);
    else hashMap.set(el, hashMap.get(el) + 1);
  }

  // { s: 1, i: 1, l: 0, e: 1, n: 1, t: 1 }
  for (const el of strB) {
    if (!hashMap.get(el)) return false; // undefined or 0일떄 조건문이 걸리니깐
    hashMap.set(el, hashMap.get(el) - 1);
  }

  return true;
}

console.log(solution1(strA, strB));
console.log(solution2(strA, strB));
console.log(solution3(strA, strB));
