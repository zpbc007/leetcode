/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    nums.sort((a, b) => a -b)     
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors2 = function(nums) {
    let point1 = nums.length - 1
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i > point1) {
            break
        }
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.unshift(0)
        } else if (nums[i] === 2) {
            nums.splice(i, 1)
            nums.push(2)
            point1--
            i--
        }
    }     
}