/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * (x, y) => (y, len - x) x为行 y为列
 */
var rotate = function(matrix) {
    const len = matrix.length,
        PointMap = {};

    for (let x = 0; x < len; x++) {
        for (let y =0; y < len; y++) {
            const pointKey = `x-${x}, y-${y}`,
                mapVal = PointMap[pointKey];
            const preVal = (mapVal || mapVal === 0) ? mapVal : null;
            const { val, point } = replace(matrix, [x, y], len, preVal);
            PointMap[`x-${point[0]}, y-${point[1]}`] = val;
        }
    }
};

/**
 * 给定坐标 将该点移到对应位置上并返回被替换点的坐标与值
 * @param {*} matrix 矩阵
 * @param {*} point 要移动的点
 * @param {*} len 矩阵 n
 * @returns {val: 被替换点值, point: 被替换点坐标}
 */
function replace (matrix, point, len, val) {
    const [x, y] = point,
        curVal = getVal(matrix, point), // 当前点的值
        targetPoint = [y, len - x - 1], // 目标点坐标
        targetVal = getVal(matrix, targetPoint); // 目标点的值
    
    // 如果设置了val 则替换为val 否则替换为当前点的值（第一次替换）
    setVal(matrix, targetPoint, (!!val || val === 0) ? val : curVal);

    return {
        val: targetVal,
        point: targetPoint,
    };
}

function getVal(matrix, [x, y]) {
    return matrix[x][y];
}

function setVal(matrix, [x, y], val) {
    matrix[x][y] = val;
}