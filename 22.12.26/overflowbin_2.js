// slove.1
function solution(citations) {
  // 우리원하는 H의 값.
  // n편 중, h번 이상 인용된 논문이 h편 이상이
  // 나머지 논문이 h번 이하 인용되었다면

  let h = 0; // 최댓값 구하기

  for (let i = 1; i <= Math.max(...citations); i++) {
    let count = 0;

    // 어떤 과학자의 논문갯수(n) 중 h번 이상 인용된 논문이 h편이상이고
    let max = citations.filter((el) => el >= i).length;

    // 나머지 논문이 h번 이하 인용
    let min = citations.length - max;

    if (max >= i && min <= i) {
      h = Math.max(h, i);
    }
  }
  console.log(h);
  return h;
}

// slove.2
function solution(citations) {
  var answer = 0;

  // 논문n편 중, h번 이상 ..?
  let max = Math.max(...citations);

  let temp = 0;
  while (temp <= max) {
    let h = 0;

    for (let el of citations) {
      if (el >= temp) h++;
    }

    if (temp >= h) {
      answer = h;
      break;
    } else {
      temp++;
    }
  }

  return answer;
}
