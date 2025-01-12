function isAnagram(s: string, t: string): boolean {
    const reverseArr = s.split('').sort();
    const targetArr = t.split('').sort();
    const maxLength = Math.max(s.length, t.length);

    for(let i=0; i< maxLength; i++) {
        if(reverseArr[i] !== targetArr[i]) {
            return false
        }
    }
    return true
};