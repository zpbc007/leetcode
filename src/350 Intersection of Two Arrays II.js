/**
 * 求两个数组的交集（重复数字重复出现）
 * 将短的数组排序，然后遍历它
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let sortNum = null, 
          unSortedNum = null, 
          result = []
    if (nums1.length > nums2.length) {
        sortNum = nums2
        unSortedNum = nums1
    } else {
        sortNum = nums1
        unSortedNum = nums2
    }

    const map = {}
    for (let i of unSortedNum) {
        if (!!map[i]) {
            map[i]++
        } else {
            map[i] = 1
        }
    }

    for (let i of sortNum) {
        if (!!map[i]) {
            result.push(i)
            map[i]--
        }
    }

    return result

};