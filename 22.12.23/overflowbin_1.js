// solve.1 hashMap 이용
function solution(participant, completion) {
  // 참여자 해시맵 만들어 주기(중복값이 있으므로)
  const hash = {};
  for (let runner of participant) {
    hash[runner] = hash[runner] ? hash[runner] + 1 : 1;
  }

  completion.forEach((runner) => hash[runner]--);

  for (let key in hash) {
    if (hash[key] === 1) return key;
  }
}

// solve.2 sort + for
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// map 추가해보기

// solve.3 time out
function solution(participant, completion) {
  while (completion.length) {
    let runner = completion.pop();
    if (!participant.includes(runner)) return runner;
    participant[participant.indexOf(runner)] = "";
  }

  return participant.find((el) => el !== "");
}

// p  ["", "", "", "vinko", ""],
//   c  []

// solve.3 array method (검토용)
var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

// 알게된 점 :
// 1. set자료형을 return 하면 빈객체({})만 나온다
// 2. 내부적인 sort 구동방식()
// 이 정렬 알고리즘은 'Insertion Sort'과 'Merge Sort'를 결합하여 만든 정렬이라고 한다.
// merge sort를 기반으로 엄청나게 최적화를 한 알고리즘이다.
// => case 별로 다를 수 있겠지만 for문이 더 빠를듯?
