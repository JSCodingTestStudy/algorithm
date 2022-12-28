class Dungeon {
    constructor(need, cost) {
        this.need = need;
        this.cost = cost;
        this.isVisited = false;
    }

    canVisit(tiredness) {
        if (this.isVisited) {
            return false;
        }
        return tiredness >= this.need;
    }

    visit(tiredness) {
        this.isVisited = true;
        return tiredness - this.cost;
    }

    undo(tiredness) {
        this.isVisited = false;
        return tiredness + this.cost;
    }
}

let answer = 0;
function solution(k, dungeonsInput) {
    const dungeons = new Array(dungeonsInput.length)

    for (const i in dungeonsInput) {
        dungeons[i] = new Dungeon(dungeonsInput[i][0], dungeonsInput[i][1]);
    }

    dfs(dungeons, k, 0);
    return answer;
}

function dfs(dungeons, tiredness, count) {
    answer = Math.max(answer, count);

    for (const d of dungeons) {
        if (d.canVisit(tiredness)) {
            tiredness = d.visit(tiredness);
            dfs(dungeons, tiredness, count+1);
            tiredness = d.undo(tiredness);
        }
    }
}

console.log(solution(80, [[80,20],[50,40],[30,10]]	))
