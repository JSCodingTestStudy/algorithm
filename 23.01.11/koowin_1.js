var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (target > nums[mid]) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
};

console.log(searchInsert([1], 1));