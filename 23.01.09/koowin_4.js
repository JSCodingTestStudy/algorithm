function solution(number, k) {
    let i = 0;
    while (k) {
        for (; i < number.length - 1; i++) {
            if (number.charAt(i) < number.charAt(i + 1)) {
                break;
            }
        }
        number = deleteCharAt(number, i);
        if (i > 0) {
            i--;
        }
        k--;
    }
    return number;
}

function deleteCharAt(str, i) {
    return str.substring(0, i) + str.substring(i + 1, str.length);
}