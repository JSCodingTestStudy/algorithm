class Stack {
    constructor() {
        this._arr = [];
    }
    push(item) {
        this._arr.push(item);
    }
    peek() {
        if (this._arr.length === 0) {
            return null;
        }
        return this._arr[this._arr.length - 1];
    }
}
function solution(arr) {
    const stack = new Stack();

    for (const i of arr) {
        if (stack.peek() !== i) {
            stack.push(i);
        }
    }

    return stack._arr;
}

solution([1, 1, 3, 3, 0, 1, 1]);