function solution(brown, yellow) {
  var answer = [0, 0];

  let xy = (brown - 4) / 2; //(x+y => 3)

  for (let i = Math.ceil(xy / 2); i < xy; i++) {
    if (i * (xy - i) === yellow) {
      answer[0] = i + 2;
      answer[1] = xy - i + 2;
      break;
    }
  }

  return answer;
}

// b24 => 24 - 4 : 20 => 20/2 : 10 (가로 x 세로) => 10: 6+4 ~ 9+1 : 24가되어야함 => 6 + 4 => 6+2, 4+2 => 8, 6
// b10 => 10 - 4 : 6 => 6 /2:
// 1, 3 => (1+ 3) / 2 : 2 * 2 or 3 * 1
