function solution(numbers) {
  let answer = 0;
  let memo = new Set();
  numbers = numbers.split(""); //['1', '7']
  // 0120  => 0012, 0012

  let check = Array(numbers.length).fill(false);

  function dfs(idx, numStr) {
    if (idx === numbers.length) {
      memo.add(Number(numStr));
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (!check[i]) {
          check[i] = true;
          dfs(idx + 1, numStr + numbers[i]);
          dfs(idx + 1, numStr + "");
          check[i] = false;
        }
      }
    }
  }

  dfs(0, "");

  function isPrime(num) {
    num = Number(num);
    let result = true;
    if (num === 1 || num === 0) return false;

    let sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }

    return result;
  }

  const arr = Array(...memo);
  return arr.filter((el) => isPrime(el)).length;
}
