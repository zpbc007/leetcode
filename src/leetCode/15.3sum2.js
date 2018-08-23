/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }
    const sortedNums = nums.sort((a, b) => a - b),
        result = [];

    for (let i = 0, len = sortedNums.length; i < len - 2; i++) {
        const curVal = sortedNums[i],
            targetVal = 0 - curVal;
        
        if (curVal > 0) {
            break;
        }
        if (curVal === sortedNums[i - 1]) {
            continue;
        }
        let twoSumResult = twoSum(sortedNums, i + 1, len - 1, targetVal);
        if (twoSumResult.length > 0) {
            for (let indexArr of twoSumResult) {
                result.push([sortedNums[i], sortedNums[indexArr[0]], sortedNums[indexArr[1]]])
            }
        }
    }
    return result;
};

function twoSum (numArr, startIndex, endIndex, target) {
    let fIndex = startIndex, 
        lIndex = endIndex,
        result = [];

    while (fIndex < lIndex) {
        if (fIndex !== startIndex && numArr[fIndex] === numArr[fIndex - 1]) {
            fIndex++;
            continue;
        }
        if (lIndex !== endIndex && numArr[lIndex] === numArr[lIndex + 1]) {
            lIndex--;
            continue;
        }
        const sum = numArr[fIndex] + numArr[lIndex];
        if (sum < target) {
            fIndex++;
        } else if (sum > target) {
            lIndex--;
        } else {
            result.push([fIndex, lIndex]);
            fIndex++;
            lIndex--;
        }
    }

    return result;
}