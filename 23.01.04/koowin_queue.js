class Node {
    constructor(item) {
        this.item = item;
        this.p = null;
        this.n = null;
    }

    get prev() {
        return this.p;
    }

    get next() {
        return this.n;
    }

    setPrev(n) {
        this.p = n;
    }

    setNext(n) {
        this.n = n;
    }
}
// double linked list queue
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.len = 0;
    }

    offerLast(item) {
        const n = new Node(item);
        if (this.len === 0) {
            this.first = n;
            this.last = n;
        } else {
            this.last.setNext(n);
            n.setPrev(this.last);
            this.last = n;
        }
        this.len++;
    }

    offerFirst(item) {
        const n = new Node(item);
        if (this.len === 0) {
            this.first = n;
            this.last = n;
        } else {
            this.first.setPrev(n);
            n.setNext(this.first);
            this.first = n;
        }
        this.len++;
    }

    pollFirst() {
        if (this.len === 0) {
            throw new Error("empty queue");
        }
        if (this.len === 1) {
            this.len--;
            const item = this.first.item;
            this.first = null;
            this.last = null;
            return item;
        }
        const item = this.first.item;
        this.first.next.setPrev(null);
        this.first = this.first.next;
        this.len--;
        return item;
    }

    pollLast() {
        if (this.len === 0) {
            throw new Error("empty queue");
        }
        if (this.len === 1) {
            this.len--;
            const item = this.last.item;
            this.first = null;
            this.last = null;
            return item;
        }
        const item = this.last.item;
        this.last.prev.setNext(null);
        this.last = this.last.prev;
        this.len--;

        return item;
    }

    peekFirst() {
        if (!this.first) {
            return null;
        }
        return this.first.item;
    }

    peekLast() {
        if (!this.last) {
            return null;
        }
        return this.last.item;
    }
}

export {Queue};