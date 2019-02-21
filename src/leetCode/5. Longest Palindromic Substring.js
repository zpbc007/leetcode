/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length === 0) {
        return s;
    }

    let tmpArr = [],
        tmpMap = {},
        tmpPstring = '',
        maxPstring = '';

    for (let i = 0, len = s.length; i < len; i++) {
        const currentChar = s[i];
        if (tmpMap[currentChar]) {// 出现过此字母
            tmpPstring = `${currentChar}${tmpPstring}${currentChar}`
        } else {// 没有出现过
            if (tmpPstring.length > 0) {// 清空
                if (tmpPstring.length > maxPstring.length) {
                    maxPstring = tmpPstring;
                }
                tmpPstring = '';
            }
            tmpArr.push(currentChar);
            tmpMap[currentChar] = true;
        }
    }
};