const searchInsert = (nums, target) => {
    if(!nums.includes(target)){
        nums.push(target);
        nums.sort((a,b) => a-b);
    }

    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        let middle = Math.floor((left+right)/2)
        if(target < nums[middle]){
            right = middle-1;
        } else if(target > nums[middle]){
            left=middle+1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(searchInsert([1,3,5,6], 2))
