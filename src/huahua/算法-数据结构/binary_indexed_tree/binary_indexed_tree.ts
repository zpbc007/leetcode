/** 树状数组 */
export class BinaryIndexedTree {
    private sumArr: number[] = [];
    constructor(size: number) {
        /** 数组从1开始 */
        this.sumArr = Array(size + 1).fill(0);
    }

    /**
     * 更新节点
     * @param index 节点位置
     * @param delta 节点值的变化
     */
    update(index: number, delta: number) {
        while (index < this.sumArr.length) {
            this.sumArr[index] += delta;
            index += this.lowbit(index);
        }
    }

    /**
     * 前index个节点值的和
     * @param index 节点位置
     */
    query(index: number) {
        let sum = 0;
        while(index > 0) {
            sum += this.sumArr[index];
            index -= this.lowbit(index);
        }

        return sum;
    }

    private lowbit(index: number) {
        return index & (-index);
    }
}