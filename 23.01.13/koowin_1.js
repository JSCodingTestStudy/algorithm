/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    const answer = [];
    const charArr = [];
    function cur(open, close) {
        if (charArr.length === n * 2) {
            answer.push(charArr.join(''));
            return;
        }
        if (open < n) {
            charArr.push('(');
            cur(open + 1, close);
            charArr.pop();
        }
        if (open > close) {
            charArr.push(')');
            cur(open, close + 1);
            charArr.pop();
        }
    }

    cur(0, 0);
    return answer;
};
console.log(generateParenthesis2(3));