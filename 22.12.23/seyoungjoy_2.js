function solution(progresses, speeds) {
    // 배열의 크기를 예측할 수 있을 때, 초기화 시 크기를 지정해주면 자원 낭비를 막을 수 있다.
    const daysLefts = new Array(progresses.length);
    for (let i = 0; i < progresses.length; i++) {
        daysLefts[i] = getDaysLeft(progresses[i], speeds[i]);
    }

    const answer = [];
    let count = 0;
    let max = daysLefts[0];

    for (const d of daysLefts) {
        if (d > max) {
            answer.push(count);
            max = d;
            count = 0;
        }
        count++;
    }
    answer.push(count);

    return answer;
}

const complete = 100;
function getDaysLeft(progress, speed) {
    let progressLeft = complete - progress;
    return Math.ceil(progressLeft / speed);
}

console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99],  [1, 1, 1, 1, 1, 1]))