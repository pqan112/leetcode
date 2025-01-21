function isPerfectSquare(num: number): boolean {
    let l = 1, r = num;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let square = mid * mid;

        if (square === num) {
            return true;
        } else if (square < num) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return false;
};