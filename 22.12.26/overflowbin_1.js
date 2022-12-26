// solve.1
function solution(nums) {
  let answer = "";

  // 0 또는 양의 정수가 주어짐 => 이어 붙여 만드는 수 중 가장 큰 수
  // 6, 10, 2 => 6210이 가장 큰 수

  // solve.1
  // 하라는 방법대로 수를 모두 만들고 sort해서 0번째 숫자(가장큰 수) 리턴

  // solve.2
  // 99, 98, 975, 8921 => 맨 앞의 숫자가 큰(같으면 다음수를 비교)수를 순서로 나열시키기 => 합쳐서 숫자로 변경
  nums = nums.map((el) => el.toString().split(""));

  // nums.sort((a, b) => Number(a[0]) === Number(b[0]) ? Number(b[1]) - Number(a[1]) : Number(b[0]) - Number(a[0]))

  for (let i = 0; i < 4; i++) {
    nums.sort((a, b) => {
      if (b[i] && a[i]) return Number(b[i]) - Number(a[i]);
      else if (b[i] && !a[i]) return -1;
      else if (!b[i] && a[i]) return 1;
      else return;
    });
    console.log(nums);
  }

  answer = nums.flat().reduce((acc, val) => acc + val);

  return answer;
}
//"9533430"
//"9534330"

// 3 => [3, 3]
// 30 => [30, 2]

// solve.2
function solution(nums) {
  let answer = "";

  nums = nums.map((el) => {
    let len = 4 - el.toString().length;
    return [el.toString(), el * Math.pow(10, len), len];
  });

  nums.sort((a, b) => (b[1] === a[1] ? b[2] - a[2] : b[1] - a[1]));
  console.log(nums);

  answer = nums.reduce((acc, val) => acc + val[0], "");

  return answer;
}

function solution(nums) {
  let answer = "";

  nums = nums.map((el) => {
    let len = 4 - el.toString().length;
    let str = el.toString();
    return [
      str,
      Number(str + str[str.length - 1].repeat(len)),
      el * Math.pow(10, len),
    ];
  });
  console.log(nums);

  nums.sort((a, b) => a[1] + a[2] - (b[1] + b[2]));

  //b[2] === a[2] ? b[1] - a[1] : b[2] - a[2]
  console.log(nums);

  answer = nums.reduce((acc, val) => acc + val[0], "");

  return answer;
}

// solve.3_최종
function solution(nums) {
  let answer = "";

  nums = nums.map((el) => {
    let str = el.toString();
    return [str, str.repeat(4).slice(0, 4)];
  });

  nums.sort((a, b) => b[1] - a[1]);

  answer = nums.reduce((acc, val) => acc + val[0], "");

  return answer[0] === "0" ? "0" : answer;
}
