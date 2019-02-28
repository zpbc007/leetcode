/**
 * 构造函数
 * @param {number[]} nums 初始给定数组
 */
const NumArray = function(nums) {
    this.nums = nums;
}

/** 
 * 更新操作
 * @param {number} i 更新第i项
 * @param {number} val 更新后的值
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.nums[i] = val;
};

/**
 * 求和
 * @param {number} i 起始位置
 * @param {number} j 终止位置
 */
NumArray.prototype.sumRange = function(i, j) {
    let sum = 0;
    for (let index = i; index <= j; index++) {
        sum += this.nums[index];
    }

    return sum;
};

const arr = [1, 2, 3, 4];

const obj = new NumArray(arr);

console.log(obj.sumRange(0, 3));

obj.update(0, 2);

console.log(obj.sumRange(0, 3));