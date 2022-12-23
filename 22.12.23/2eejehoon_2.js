function solution(progresses, speeds) {
  const answer = [];
  let day = 1; // 작업일
  let count = 0; // 배포하는 기능의 수
  while (progresses.length) {
    if (progresses[0] + speeds[0] * day >= 100) {
      // 작업이 완료됐을 때
      progresses.shift();
      speeds.shift();
      count++;
      if (progresses.length === 0) {
        // 완료된 작업이 마지막 작업일 경우
        answer.push(count);
      }
    } else if (count > 0) {
      // 이전에 완료된 작업이 있을 경우
      answer.push(count);
      count = 0;
    } else {
      // 이전에 완료된 작업이 없으면서, 작업이 완료되지 않을 경우
      day++;
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
