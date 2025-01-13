function runningSum(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 1; i < len; i++) {
        nums[i] += nums[i - 1];
    }

    return nums
};