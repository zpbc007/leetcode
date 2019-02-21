/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }
    let resultArr = [],
        firstChart = s[0];
    let curArr = [firstChart];
    for (let i = 1, len = s.length; i < len; i++) {
        const curChart = s[i],
            preIndex = curArr.indexOf(curChart);
        if (preIndex === -1) {
            curArr.push(curChart)
        } else {
            if (resultArr.length < curArr.length) {
                resultArr = curArr
            }
            curArr = curArr.slice(preIndex+1)
            curArr.push(curChart)
        }
    }

    if (resultArr.length < curArr.length) {
        return curArr.length;
    } else {
        return resultArr.length;
    }
};

