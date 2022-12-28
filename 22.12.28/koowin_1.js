function solution(brown, yellow) {
	const plus = (brown + 4) / 2;
	const mult = brown + yellow;

	let w = plus - 1;
	let h = 1;

	while(true){
		if(w * h === mult){
			break;
		}
		w--;
		h++;
	}
	return [w, h];
}

console.log(solution(10, 2))
console.log(solution(8, 1))
console.log(solution(24, 24))
	
