function solution(number, k) {
  const numbers = []; //
  for (let num of number) {
    while (k > 0 && numbers[numbers.length - 1] < num) {
      numbers.pop();
      k--;
    }
    numbers.push(num);
  }
  return numbers.join("").slice(0, number.length - k);
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
