/**
 * 在数组中查找元素 通过删除给定字符串部分元素就能与其匹配 返回最长的字典顺序最小的元素
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    // 找出符合条件的词
    const lengthMap = {}
    for (let str of d) {
        if (compareStr(s, str)) {
            let length = str.length
            if (lengthMap[length]) {
                lengthMap[length].push(str)
            } else {
                lengthMap[length] = [str]
            }   
        }
    }

    // 没有符合的返回空字符串
    if (Object.keys(lengthMap).length === 0) {
        return ''
    }

    // 找出最长的
    let maxLen = 0
    for (let len in lengthMap) {
        if (Number.parseInt(len) > maxLen) [
            maxLen = len
        ]
    }

    let maxArr = lengthMap[maxLen]
    // 如果只有一个直接返回
    if (maxArr.length === 0) {
        return maxArr[0]
    }

    // 找出字典书序最前的字符串
    let resultStr = maxArr[0]
    for (let i = 1, len = maxArr.length; i < len; i++) {
        if (compareStrByOrder(maxArr[i], resultStr) === -1) {
            resultStr = maxArr[i]
        }
    }
    return resultStr
};

// 判断str1能否通过删除单词变为str1
function compareStr(str1, str2) {
    if (str1.length < str2.length) {
        return false
    }
    let lastIndex = 0,
        len = str1.length
    for (let s of str2) {
        for (j = lastIndex; j < len; j++, lastIndex++) {
            if (str1[j] === s) {
                break
            }
        }
        lastIndex++
        if (lastIndex > len) {
            return false
        }
    }
    return true
}

// 通过字典顺序比较字符串
function compareStrByOrder (str1, str2) {
    for (let i = 0, len = str1.length; i < len; i++) {
        if (str1[i] > str2[i]) {
            return 1
        }
        if (str1[i] < str2[i]) {
            return -1
        }
    }
    return 0
}