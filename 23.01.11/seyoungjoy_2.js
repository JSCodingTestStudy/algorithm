function solution(n, times) {
    times.sort((a,b)=>a-b);
    let left = 1;
    let right = n * times[times.length-1];
    let answer = right;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let sum = 0;
        for(let x of times){
            sum += Math.floor(mid/x);
            if(sum >= n){
                answer = Math.min(mid, answer);
                return;
            }
        }
        if(sum >= n){
            right = mid-1;
        } else {
            left = mid +1;
        }
    }
    return answer;
}
