// 내림차순으로 정렬된 배열에서
// H-index가 1이 되려면, desc[0] >= 1
// desc[i] >= i+1 이면 h++;

function solution1(citations) {
  let max = citations.length;
  const desc = citations.slice().sort((a, b) => b - a);
  for (let i = 0; i < desc.length; i++) {
    if (desc[i] < i + 1) return i;
  }
  return max;
}
console.log(solution1([3, 0, 6, 1, 5]));

function solution2(citations) {
  let h = 0;
  const desc = citations.slice().sort((a, b) => b - a);
  for (let i = 0; i < desc.length; i++) {
    if (desc[i] >= i + 1) h++;
    else return h;
  }
}
console.log(solution2([3, 0, 6, 1, 5]));
