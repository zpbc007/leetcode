export class Stack<T> {
    dataArr: T[] = []

    pop() {
        return this.dataArr.pop()
    }

    push(item: T) {
        return this.dataArr.push(item)
    }

    getTail() {
        if (this.size === 0) {
            return null
        }

        return this.dataArr[this.size - 1]
    }

    get size() {
        return this.dataArr.length
    }
}

export class Hole {
    fixed = false
    constructor(public left: number = 0, public right: number = 0) {}

    /** 不包含 left right */
    dataArr: number[] = []

    addData(dataItem: number) {
        this.dataArr.push(dataItem)
    }

    /** 合并 */
    merge(newHole: Hole) {
        this.right = newHole.right
        this.dataArr = [...this.dataArr, newHole.left, ...newHole.dataArr]

        return this
    }

    /** 能否合并 */
    canMerge(newHole: Hole) {
        if (this.fixed) {
            return false
        }
        return newHole.right >= this.right
    }

    /** 计算面积 */
    getArea() {
        const max = Math.min(this.left, this.right)

        return this.dataArr.reduce((acc, val) => {
            if (val < max) {
                return acc + max - val
            }

            return acc
        }, 0)
    }
}

/**
 * @param height 高度数组
 */
const trap = (height: number[]) => {
    const holeStack = new Stack<Hole>()

    let index = 0

    // 找到第一个左边
    for (; index < height.length; index++) {
        if (height[index] > height[index + 1]) {
            break
        }
    }

    let currentHole: Hole = new Hole(height[index])
    let leftIndex = index
    let findLeft = true
    const len = height.length
    for (; index < len; index++) {
        const current = height[index]
        const next = height[index + 1]

        if (leftIndex !== index) {
            if (findLeft) {
                if (current < next) {
                    findLeft = false
                }
                currentHole.addData(current)
            } else {
                // 右侧边
                if (index === len - 1 || current > next) {
                    currentHole.right = current
        
                    // 与之前的坑合并
                    while (holeStack.size > 0 && holeStack.getTail()!.canMerge(currentHole)) {
                        currentHole = holeStack.pop()!.merge(currentHole)
                    }
                    if (currentHole.left <= currentHole.right && (holeStack.size === 0 || holeStack.getTail()!.fixed)) {
                        currentHole.fixed = true
                    }
                    holeStack.push(currentHole)
        
                    // 下次循环
                    leftIndex = index
                    currentHole = new Hole(current)
                    findLeft = true
                } else {
                    currentHole.addData(current)
                }
            }
        }
    }

    let result = 0

    while (holeStack.size > 0) {
        result += holeStack.pop()!.getArea()
    }

    return result
}