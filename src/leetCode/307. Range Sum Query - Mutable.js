/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const tree = new BinaryIndexedTree(nums.length);

    nums.forEach((value, index) => {
        tree.update(index + 1, value);
    });

    this.tree = tree;
    this.nums = nums;
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.tree.update(i + 1, val - this.nums[i])
    this.nums[i] = val;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.tree.query(j + 1) - this.tree.query(i);
};

class BinaryIndexedTree {
    constructor(length) {
        this.sumList = Array(length + 1).fill(0);  
    }

    update(index, delta) {
        while(index < this.sumList.length) {
            this.sumList[index] += delta;
            index += this.getLowbit(index);
        }
    }

    query(index) {
        let sum = 0;
        while(index > 0) {
            sum += this.sumList[index];
            index -= this.getLowbit(index);
        }

        return sum;
    }

    getLowbit(number) {
        return number & (-number);
    }
}