/**
 * 找出连个数组的交集
 * 2018/3/8
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // 去重
    const set1 = new Set(nums1)
    const set2 = new Set(nums2) 
    const result = []
    for (let i of set1) {
        if (set2.has(i)) {
            result.push(i)
        }
    }

    return result
};