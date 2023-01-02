function solution(babbling) {
    let count = 0;
    const list = ["aya", "ye", "woo", "ma"];

    function helper(babble){
        if(babble.length === 0) return;
        let word = ""
        for(let i=0; i<babble[0].length; i++){
            word += babble[0][i];
            // "aya"
            for(let j=0; j<list.length; j++){
                if(word.includes(list[j])){
                    word = word.replace(list[j], " ");
                }
            }
        }
        // ["", "uuu", "", "", "a"]
        if(word.trim().length === 0) count ++;
        helper(babble.slice(1))
    }
    helper(babbling);
    return count;
}

// solution(["aya", "yee", "u", "maa", "wyeoo"]); //1
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]); //3
