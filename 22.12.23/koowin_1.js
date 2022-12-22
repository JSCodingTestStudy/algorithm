function solution(participant, completion) {
    const m = new Map();

    for (const name of participant) {
        let count = m.get(name) || 0;
        m.set(name, count+1);
    }

    for (const name of completion) {
        const count = m.get(name);
        if (count === 1) {
            m.delete(name);
        } else {
            m.set(name, count - 1);
        }
    }

    for (const name of m.keys()) {
        return name;
    }
    return "no answer";
}