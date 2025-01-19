/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let l = 1;
    let r = n;

    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        const res = guess(mid);

        if (res === 0) return mid;
        if (res === -1) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    // return for type safety
    return l;
};