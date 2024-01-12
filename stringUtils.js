function remainder(n, m){
    const largerNum = Math.max(n,m);
    const smallerNum = Math.min(n,m);
    
    return largerNum % smallerNum;
}

function removeDuplicateWords (s) {
    s = s.split(' ');
    s = new Set(s);
    return Array.from(s).join(' ');
}

module.exports = {
    remainder,
    removeDuplicateWords
}