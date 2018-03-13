/**
 * 判断t是不是s的变位词
 * 将t放入map中，key为字母value为个数
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const tMap = {}
    for (let i of t) {
        if (!!tMap[i]) {
            tMap[i]++
        } else {
            tMap[i] = 1
        }
    }
    for (let i of s) {
        // map中存在
        if (!!tMap[i]) {
            tMap[i]--
        } else {
            return false
        }
    }
    for (let i in tMap) {
        if (tMap[i] !== 0) {
            return false
        }
    }
    return true
};