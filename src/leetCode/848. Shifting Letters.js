/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    let sum = 0;
    let result = '';
    // 从后向前遍历数组
    for (let i = shifts.length - 1; i >=0; i--) {
        sum = shifts[i] + sum;
        result = shiftChar(S[i], sum) + result;
    }

    return result;
};

/**
 * 字母转换
 * @param {string} char 
 * @param {number} num 
 */
function shiftChar(char, num) {
    let finalCode = char.charCodeAt(0) + num % 26;
    if (finalCode > 122) {
        finalCode = finalCode - 26;
    }

    return String.fromCharCode(finalCode);
}