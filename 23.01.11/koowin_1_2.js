// 배열 안에서 target 찾아서 그 인덱스 반환하기. 만약 없으면 -1 반환
function binarySearch(arr, target, l, r) {
    if (r <= l) {
        if (arr[l] === target) {
            return l;
        }
        return -1;
    }

    const m = Math.floor((l + r) / 2);
    if (arr[m] === target) {
        return m;
    } else if (arr[m] < target) {
        return binarySearch(arr, target, m + 1, r);
    } else {
        return binarySearch(arr, target, l, m - 1);
    }
}