function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const map: Map<string, number> = new Map();
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const charS = s[i];
        const charT = t[i];
        map.set(charS, (map.get(charS) || 0) + 1);
        map.set(charT, (map.get(charT) || 0) - 1);
    }

    for (const count of map.values()) {
        if (count !== 0) return false;
    }

    return true;
};