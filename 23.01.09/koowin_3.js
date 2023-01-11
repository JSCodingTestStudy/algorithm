const last_code = "Z".charCodeAt(0) + 1;        //91
const first_code = "A".charCodeAt(0);           //65
function solution(name) {
    let answer = name.length - 1;

    // 좌우 이동
    for (let i = 0; i < name.length / 2; i++) {
        for (let j = i + 1, l = 0; j <= name.length; j++, l++) {
            if (j === name.length || name.at(j) !== "A") {
                answer = Math.min(answer, i + name.length - l - 1);
                break;
            }
        }

        for (let j = -i - 1, l = 0; j > -name.length; j--, l++) {
            if (name.at(j) !== "A") {
                answer = Math.min(answer, i + name.length - l - 1);
                break;
            }
        }
    }

    // 상하 이동
    for (let i = 0; i < name.length; i++) {
        answer += Math.min(name.charCodeAt(i) - first_code, last_code - name.charCodeAt(i));
    }

    return answer;
}

console.log(first_code);

// 00000100000011111000000001011

// index: 20
// str.indexOf(1) === 1