// 문자열로 바꾸고,
// 내림차순으로 정렬
// 가장 큰 수가 0인 경우에는 0을 리턴하고, 아니면 합친 문자를 리턴

// 1. 각 자리 숫자를 비교해서 정렬
function solution1(numbers) {
  let answer = "";
  const strings = numbers.map((el) => el.toString());
  const sortedArr = strings.sort((a, b) => {
    let i = (j = 0);
    while (i === a.length - 1 && j === b.length - 1) {
      if (a[i] !== b[j]) return b[j] - a[i];
      else {
        if (i < a.length - 1) i++;
        if (j < b.length - 1) j++;
      }
    }
    return b - a;
  });
  answer = sortedArr.join("");
  return answer[0] === "0" ? "0" : answer;
}
console.log(solution1([330, 3304])); // 3301330

// 2. 앞, 뒤로 이어 붙인 문자를 비교해서 정렬
function solution2(numbers) {
  let answer = "";
  const strings = numbers.map((el) => el.toString());
  const sortedArr = strings.sort((a, b) => b + a - (a + b));
  answer = sortedArr.join("");
  return answer[0] === "0" ? "0" : answer;
}
console.log(solution2([330, 3304])); // 3303301
