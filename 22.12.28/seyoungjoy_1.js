// 완전탐색 > 카펫

/*
1) brown + yellow 더한값으로 사각형을 만듬.
2) 공약수를 구해서 조건에 해당하는 값들을 추출
- 만약 9가 있으면 해당 공약수 모두 추출 [1, 3, 9]
- 3P2, 3가지 숫자를 조합해서 2가 나오는 경우의 수를 모두 구함(1*1 1*3 1*9 3*1 3*3 3*9 9*1 9*3 9*9)
    - 곱했을 때 9가 나오고
    - 가로가 세로보다 크거나 같아야하고
    - 세로는 3보다는 커야하고
    - brown 개수는 (가로*2 + 세로*2 - 4)가 나와야함.
**/

function solution(brown, yellow) {
    let answer = [];
    const sum = brown+yellow;
    let divisor = [];

    // 공약수 추출
    for(let i=1; i<=sum; i++){
        if(sum % i === 0) divisor.push(i);
    }
    // divisor = [ 1, 3, 9 ]

    for(let j=0; j<divisor.length; j++){
        for(let k=0; k<divisor.length; k++){
            if(divisor[j]*divisor[k] === sum && divisor[j]>=divisor[k] && divisor[k]>=3 && (divisor[j]*2 + divisor[k]*2 - 4 === brown)){
                answer.push(divisor[j],divisor[k])
            }
        }
    }
    console.log(answer)
    return answer;
}

solution(8,1); //[3,3]
// solution(10,2); //[4,3]
// solution(12,3); //[5,3]
// console.log(solution(24,24)); //[8,6]
