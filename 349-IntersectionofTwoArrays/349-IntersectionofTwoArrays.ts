function intersection(nums1: number[], nums2: number[]): number[] {
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            result.push(nums1[i]);
        }
    }

    return [...new Set(result)];
};