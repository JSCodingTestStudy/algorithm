function solution(name) {
  let answer = 0;
  let index = 0;
  let length = name.length;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const reverse = alphabet.slice().reverse();

  const needChange = [];

  for (let x of name) {
    if (x === "A") needChange.push(0);
    else needChange.push(1);
  }

  while (needChange.indexOf(1) > -1) {
    if (
      needChange.indexOf(1) - index >
      length - needChange.lastIndexOf(1) + index
    ) {
      answer += length - needChange.lastIndexOf(1) + index;
      index = needChange.indexOf(1);
      needChange[index] = 0;
    } else {
      answer += needChange.indexOf(1) - index;
      index = needChange.indexOf(1);
      needChange[index] = 0;
    }

    if (alphabet.indexOf(name[index]) > reverse.indexOf(name[index]) + 1) {
      answer += reverse.indexOf(name[index]) + 1;
    } else {
      answer += alphabet.indexOf(name[index]);
    }
  }

  return answer;
}

console.log(solution("AAAAA"));
console.log(solution("JAN"));
