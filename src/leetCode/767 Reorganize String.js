/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    const map = {}
    for (let s of S) {
        if (!map[s]) {
            map[s] = 1
        } else {
            map[s]++
        }
    }

    // 找出字母最多的那个
    let maxNum = 0
    let maxKey = null
    for (let key in map) {
        if (map[key] > maxNum) {
            maxNum = map[key]
            maxKey = key
        }
    }

    let subNum = 0
    for (let key in map) {
        if (key !== maxKey ) {
            subNum += map[key]
        }
    }

    if (maxNum - 1 > subNum) {
        return ''
    }

    let result = ''
    let arr= []

    for (let j = 0; j < maxNum; j++) {
        arr.push(maxKey)
    }
    // 删除最长的那个
    delete map[maxKey]

    let keyArr = Object.keys(map)
    while (keyArr.length > 0) {
        for (let k = 0; k < maxNum && keyArr.length > 0; k++) {
            let key = keyArr[0]
            arr[k] += key
            map[key]--
            if (map[key] === 0) {
                keyArr.shift()
            }
        }
    }

    return arr.join('')
}