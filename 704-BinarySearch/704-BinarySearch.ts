function search(nums: number[], target: number): number {
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = nums[midIndex];

        if (midValue === target) return midIndex;
        if (midValue > target) {
            endIndex = midIndex - 1
        } else {
            startIndex = midIndex + 1
        }
    }
    return -1;
};