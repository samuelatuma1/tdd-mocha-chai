function intersect(set1, set2) {
    const intersect = new Set();
    for (const data of set1) {
        if (set2.has(data)) {
            intersect.add(data);
        }
    }
    return intersect;
}

function union(set1, set2) {
    const res = new Set();
    for (const data of set1) {
        res.add(data);
    }
    for (const data of set2) {
        res.add(data);
    }
    return res;
}
/**
 * 
 * @param {set} set1 : -> set1
 * @param {set} set2 : -> set2
 * @returns {set} elements in set1 that doesn't appear in set2
 */
function difference(set1, set2){
    const diff = new Set()
    for(let item of set1){
        if (!set2.has(item)){
            diff.add(item)
        }
    }
    return diff
}

module.exports = {
    intersect, union, difference
};
