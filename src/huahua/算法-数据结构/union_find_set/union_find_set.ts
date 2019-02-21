export class UnionFindSet {
    /** 深度 混乱度 */
    private rank: number[] = [];
    /** 存放各个节点的父级节点 */
    private parents: number[] = [];
    constructor(size: number) {
        // 初始化 将每个节点的父节点指向自己 
        for (let i = 0; i < size; i++) {
            this.parents[i] = i;
        }
        this.rank = Array(size).fill(0);
    }

    /** 合并两个节点 */
    union(u: number, v: number) {
        const rootU = this.find(u),
            rootV = this.find(v);
        const rankU = this.rank[rootU],
            rankV = this.rank[rootV];

        if (rootU === rootV) { // 两个节点已经在同一个集合中
            return false;
        }

        /** 将rank值低的merge到rank值高的上面去 */
        if (rankV > rankU) {
            this.parents[rootU] = rootV;
        } else if (rankV < rankU) {
            this.parents[rootV] = rootU;
        } else {
            this.parents[rootV] = rootU;
            this.rank[rootV]++;
        }

        return true;
    }

    /** 查找节点所在的集合 */
    find(x: number) {
        /** 如果节点有父级节点，则将路径压缩 */
        if (x !== this.parents[x]) {
            this.parents[x] = this.find(this.parents[x]);
        }

        return this.parents[x];
    }

    getRank(x: number) {
        return this.rank[x];
    }
}