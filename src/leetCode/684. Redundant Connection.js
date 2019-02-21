class UnionFindSet {
    constructor(size) {
        this.parents = Array(size);
        // 初始化 将每个节点的父节点指向自己 
        for (let i = 0; i < size; i++) {
            this.parents[i] = i;
        }
        this.rank = Array(size).fill(0);
    }

    /** 合并两个节点 */
    union(u, v) {
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
    find(x) {
        /** 如果节点有父级节点，则将路径压缩 */
        if (x !== this.parents[x]) {
            this.parents[x] = this.find(this.parents[x]);
        }

        return this.parents[x];
    }

    getRank(x) {
        return this.rank[x];
    }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const set = new UnionFindSet(edges.length);

    for (const [u, v] of edges) {
        if (!set.union(u, v)) {
            return [u, v]
        }
    }

    return [];
};
