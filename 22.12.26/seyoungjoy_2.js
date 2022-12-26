// 정렬 > h-index
function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>b-a);
    for(let i=0; i<citations.length; i++){
        if(answer+1 <= citations[i]){
            answer++;
        }
    }
    return answer;
}
// [6, 5, 3, 1, 0]
// [1, 2, 3, 4, 5]

console.log(solution([3, 0, 6, 1, 5]));
