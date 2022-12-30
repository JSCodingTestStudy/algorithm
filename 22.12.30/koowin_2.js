class UnionFind {
    constructor(count) {
        this.count = count;
        this.id = new Array(count);
        this.size = new Array(count).fill(1);

        for (let i = 0; i < count; i++) {
            this.id[i] = i;
        }
    }

    find(p) {
        while (p !== this.id[p]) {
            p = this.id[p];
        }
        return p;
    }

    union(p, q) {
        const i = this.find(p);
        const j = this.find(q);

        if (i === j) {
            return;
        }

        if (this.size[i] < this.size[j]) {
            this.id[i] = j;
            this.size[j] += this.size[i];
        } else {
            this.id[j] = i;
            this.size[i] += this.size[j];
        }
        this.count--;
    }
}

function solution(n, computers) {
    const uf = new UnionFind(n);

    for (let i = 0; i < computers.length; i++) {
        for (let j = i + 1; j < computers.length; j++) {
            if (computers[i][j] === 1) {
                uf.union(i, j);
            }
        }
    }

    return uf.count;
}
