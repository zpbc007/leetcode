/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    console.time()
    const {sumList: twoSumList, valueMap } = create2SumList(nums),
        result = [],
        resultMap = {};

    for (const item of twoSumList) {
        const { sum, fIndex, lIndex } = item;
        const targetValue = 0 - sum,
            targetIndexArr = valueMap[targetValue];

        if (targetIndexArr && targetIndexArr.length > 0) {
            let delLen = 0;
            if (targetIndexArr.indexOf(fIndex) !== -1) {
                delLen++;
            }
            if (targetIndexArr.indexOf(lIndex) !== -1) {
                delLen++;
            }
            if (targetIndexArr.length - delLen > 0) {
                const sortedArr = [nums[fIndex], nums[lIndex], nums[targetIndexArr.slice(-1)]].sort((a, b) => a - b);
                const has = InMap(sortedArr, resultMap)
                if (!has) {
                    result.push(sortedArr)
                }
            }
        }
    }

    console.timeEnd()
    return result;
};

function InMap (arr, map) {
    const key = `${arr[0]}__${arr[1]}__${arr[2]}`
    if (map[key]) {
        return true
    } else {
        map[key] = true
        return false
    }
}

function create2SumList (nums) {
    const sumList = [],
        len = nums.length,
        valueMap = {};
    
    for (let i = 0; i < len; i++) {
        const fValue = nums[i];
        if (valueMap[fValue]) {
            valueMap[fValue].push(i)
        } else {
            valueMap[fValue] = [i]
        }
        for (let j = i + 1; j < len; j++) {
            sumList.push({
                sum: fValue + nums[j],
                fIndex: i,
                lIndex: j,
            })
        }
    }

    return {
        valueMap,
        sumList
    }
}