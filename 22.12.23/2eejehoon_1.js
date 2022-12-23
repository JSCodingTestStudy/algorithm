function solution(participant, completion) {
  const obj = {};
  for (el of completion) {
    if (!obj[el]) obj[el] = 1;
    else obj[el]++;
  }
  for (el of participant) {
    if (!obj[el]) return el;
    else obj[el]--;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // leo
