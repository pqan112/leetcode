function isPerfectSquare(num: number): boolean {
    let i = 1;
    while(i * i <= num) {
        if(i*i === num) return true;
        i++;
    }
    return false;
};