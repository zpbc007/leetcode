/**
 * 求两个数组的交集（重复数字重复出现）
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []

    const map = {}
    for (let i of nums1) {
        if (!!map[i]) {
            map[i]++
        } else {
            map[i] = 1
        }
    }

    for (let i of nums2) {
        if (!!map[i]) {
            result.push(i)
            map[i]--
        }
    }

    return result

};