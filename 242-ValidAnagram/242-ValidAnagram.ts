function isAnagram(s: string, t: string): boolean {
    const reverseArr = s.split('').sort();
    const targetArr = t.split('').sort();
    const maxLength = s.length;
    if (s.length !== t.length) return false;

    for(let i=0; i< maxLength; i++) {
        if(reverseArr[i] !== targetArr[i]) {
            return false
        }
    }
    return true
};