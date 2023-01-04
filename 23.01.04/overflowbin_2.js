function solution1(s, e) {
  let answer;
  let distance = Array.from({ length: 10001 }, () => 0);
  let check = Array.from({ length: 10001 }, () => 0);
  let queue = [s];
  check[s] = 1;

  while (queue.length) {
    let v = queue.shift();
    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv > 0 && nv <= 10000 && check[nv] !== 1) {
        check[nv] = 1;

        queue.push(nv);
        distance[nv] = distance[v] + 1;
      }
    }

    if (distance[e]) break;
  }

  return (answer = distance[e]);
}

function solution2(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

// sovle.3 review
function solution3(s, e) {
  let queue = [s];
  let check = Array.from({ length: 10001 }, () => 0); // 레퍼런스에는 check와 거리에 대한 정보를 따로 저장했다.

  while (queue.length) {
    let cur = queue.shift();
    if (cur !== e) {
      for (let nx of [cur + 1, cur - 1, cur + 5]) {
        queue.push(nx);
        if (check[nx] === 0) check[nx] = check[cur] + 1;
      }
    } else break;
  }

  return check[e];
}

console.log(solution1(2, 24));
console.log(solution1(8, 3));

console.log(solution2(2, 24));
console.log(solution2(8, 3));

console.log(solution3(2, 24));
console.log(solution3(8, 3));
