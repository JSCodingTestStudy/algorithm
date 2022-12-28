// 완전탐색 > 피로도
// 최소 필요 피로도, 소모 피로도
// 유저가 탐험할 수 있는 최대 던전 수
// 던전 개수 1~8(완전탐색)
// 필요 피로도 >= 소모 피로도
// 다른 던전이지만 값이 값은 경우도 있다.

/*
1) 던전 순서에 따라 최대 던전수가 달라지기 때문에 던전의 순열부터 추출.
*/

function solution(k, dungeons) {
    let answer = 0;
    // 던전 순서에 따라 최대 던전수가 달라지기 때문에 던전의 순열이 필요.
    const dunArr = [];
    const dfs = (i, dungeons) => {
        if(i === dungeons.length){
            return dunArr.push([...dungeons])
        }
        for(let j=i; j < dungeons.length; j++){
            [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
            dfs(i+1, dungeons);
            [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
        }
    }
    dfs(0, dungeons);

    // console.log(dunArr);
    //[
    //   [ [ 80, 20 ], [ 50, 40 ], [ 30, 10 ] ],
    //   [ [ 80, 20 ], [ 30, 10 ], [ 50, 40 ] ],
    //   [ [ 50, 40 ], [ 80, 20 ], [ 30, 10 ] ],
    //   [ [ 50, 40 ], [ 30, 10 ], [ 80, 20 ] ],
    //   [ [ 30, 10 ], [ 50, 40 ], [ 80, 20 ] ],
    //   [ [ 30, 10 ], [ 80, 20 ], [ 50, 40 ] ]
    // ]

    // 필요 피로도 체크, 피로도 감소
    for(let i=0; i<dunArr.length; i++){
        let visit = 0;
        let fatigue = k;
        for(let j=0; j<dunArr[0].length; j++){
            if(dunArr[i][j][0] > fatigue){
                if(answer < visit) answer=visit;
                break;
            }
            fatigue -= dunArr[i][j][1];
            visit ++;
            if(answer < visit) answer=visit;
        }
    }
    console.log(answer)
    return answer;
}

solution(80,[[80,20],[50,40],[30,10]]) //3

// 객체 지향
//
