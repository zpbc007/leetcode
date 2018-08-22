const NullSymbol = Symbol('null');

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * (x, y) => (y, len - x) x为行 y为列
 */
var rotate = function(matrix) {
    const len = matrix.length,
        indexArr = [],
        tempNum = null; //  
    // 1. 构建index数组
    for (let i = 0; i < len * len; i++) {
        indexArr.push(i);
    }

    while(indexArr.length > 0) {
        // 移除当前点
        const firstIndex = indexArr[0];
        let first = true, // 首次flag
            curIndex = firstIndex,
            curVal = NullSymbol;

        while(first || curIndex !== firstIndex) {
            indexArr.splice(indexArr.indexOf(curIndex), 1);
            first = false;
            const curPoint = calPointByIndex(curIndex, len);

            const { val, point } = replace(matrix, curPoint, len, curVal);
            curIndex = calIndexByPoint(point, len);
            curVal = val;
        }
    }

};

// 根据坐标返回index
function calIndexByPoint(point, len) {
    return point[0] * len + point[1];
}

// 根据index返回坐标
function calPointByIndex(index, len) {
    return [Math.floor(index / len), index % len];
}

/**
 * 给定坐标 将该点移到对应位置上并返回被替换点的坐标与值
 * @param {*} matrix 矩阵
 * @param {*} point 要移动的点
 * @param {*} len 矩阵 n
 * @returns {val: 被替换点值, point: 被替换点坐标}
 */
function replace (matrix, point, len, val = NullSymbol) {
    const [x, y] = point,
        curVal = getVal(matrix, point), // 当前点的值
        targetPoint = [y, len - x - 1], // 目标点坐标
        targetVal = getVal(matrix, targetPoint); // 目标点的值
    
    // 如果设置了val 则替换为val 否则替换为当前点的值（第一次替换）
    setVal(matrix, targetPoint, val === NullSymbol ? curVal : val);

    return {
        val: targetVal,
        point: targetPoint,
    };
}

function getVal(matrix, point) {
    return matrix[point[0]][point[1]];
}

function setVal(matrix, point, val) {
    matrix[point[0]][point[1]] = val;
}