function removeDuplicates(nums: number[]): number {
    const len = nums.length;
    if(len ===0 || len === 1) {
        return len;
    }

    let i = 1, j = 1;

    while(j < len) {
        if(nums[j] !== nums[j-1]) {
            nums[i] = nums[j]
            i++
        }
        j++
    }
    return i;
};