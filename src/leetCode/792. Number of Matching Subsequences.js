/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
    const CharIndexMap = {};
    // 构建 字符-字符位置 索引
    for (let i = 0; i < S.length; i++) {
        if (CharIndexMap[S[i]]) {
            CharIndexMap[S[i]].push(i)
        } else {
            CharIndexMap[S[i]]=[i];
        }
    }

    // 存放word 匹配结果
    const WordResultMap = {}

    let result = 0;
    for (const word of words) {
        let matchResult = false;

        if (WordResultMap.hasOwnProperty(word)) {// 先取缓存结果
            matchResult = WordResultMap[word];
        } else {
            matchResult = isMatch(word, CharIndexMap)
        }

        if (matchResult) {
            result++;
        }

        WordResultMap[word] = matchResult;
    }

    return result;
};

/**
 * 查看word是否为子串
 * @param {string} word
 * @param {{[key: string]: number[]}} indexMap
 */
var isMatch = function (word, indexMap) {
    // 当前查找的位置
    let preIndex = -1;
    for (const char of word) {
        let curIndexArr = indexMap[char];

        // 字母不存在
        if (!curIndexArr) {
            return false;
        }

        // 找到下一个节点
        const index = lower_bound(curIndexArr, preIndex);
        if (index === -1) {// 没找到
            return false;
        } else {
            preIndex = curIndexArr[index];
        }
    }

    return true;
}

/**
 * 查找在arr中第一个比target大的数
 * @param {number[]} arr
 * @param {number} target
 */
var lower_bound = function(arr, target) {
    let len = arr.length,
        l = 0,
        h = len - 1;

    while(l < h) {
        const mid = Math.floor((h - l) / 2) + l;
        if (target < arr[mid]) {
            h = mid;
        } else {
            l = mid + 1;
        }
    }

    if (l < len && arr[l] > target) {
        return l;
    }

    return -1;
}