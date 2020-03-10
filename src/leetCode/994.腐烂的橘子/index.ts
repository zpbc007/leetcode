interface INode {
    row: number
    column: number
}

enum OrangeType {
    Null,
    Fresh,
    Rotten
}

const createId = (row: number, column: number) => `${row}-${column}`

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid: number[][]) => {
    const rowLen = grid.length
    const columnLen = grid[0].length
    let resultTime = 0
    let currentNodeQueue: INode[] = []
    let nextNodeQueue: INode[] = []
    let freshCount = 0
    const nodeMap: {[key: string]: true} = {}

    for (let row = 0; row < rowLen; row++) {
        for (let column = 0; column < columnLen; column++) {
            const current = grid[row][column]
            if (current === OrangeType.Rotten) {
                currentNodeQueue.push({
                    row,
                    column
                })
                nodeMap[createId(row, column)] = true
            }
            if (current === OrangeType.Fresh) {
                freshCount++
            }
        }
    }

    
    while (currentNodeQueue.length > 0 || nextNodeQueue.length > 0) {
        if (currentNodeQueue.length === 0) {
            currentNodeQueue = nextNodeQueue
            nextNodeQueue = []
            resultTime++
        }
        const {row, column} = currentNodeQueue.shift()!
        const neighbors = getNeighbors({
            row,
            column,
            rowLen,
            columnLen
        })
        neighbors.forEach(({row: nodeRow, column: nodeColumn}) => {
            if (!nodeMap[createId(nodeRow, nodeColumn)] && grid[nodeRow][nodeColumn] === OrangeType.Fresh) {
                nextNodeQueue.push({
                    row: nodeRow,
                    column: nodeColumn
                })
                nodeMap[createId(nodeRow, nodeColumn)] = true
                freshCount--
            }
        })
    }

    return freshCount === 0 ? resultTime : -1
};

const getNeighbors = ({row, column, rowLen, columnLen}: {row: number, column: number, rowLen: number, columnLen: number}) => {
    const neighbors: INode[] = []

    if (row > 0) {
        neighbors.push({
            row: row - 1,
            column
        })
    }

    if (row < rowLen - 1) {
        neighbors.push({
            row: row + 1,
            column
        })
    }

    if (column > 0) {
        neighbors.push({
            row,
            column: column - 1
        })
    }

    if (column < columnLen - 1) {
        neighbors.push({
            row,
            column: column + 1
        })
    }

    return neighbors
}