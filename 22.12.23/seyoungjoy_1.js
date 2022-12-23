function solution(pt, cp) {
    let answer = [];
    let map = new Map();
    for(let x of pt){
        if(map.has(x)) map.set(x, map.get(x)+1)
        else map.set(x,1)
    }

    for(let x of cp){
        if(map.has(x)) map.set(x,map.get(x)-1)
    }

    for(let [key,val] of map){
        if(val === 1) return key;
    }

    return answer;
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
solution(participant, completion);