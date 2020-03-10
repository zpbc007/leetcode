export class Stack {
    dataArr: number[] = []

    empty() {
        return this.dataArr.length === 0
    }

    push(x: number) {
        this.dataArr.push(x)
    }

    pop() {
        if (this.empty()) {
            return undefined
        }

        return this.dataArr.pop()
    }

    peek() {
        if (this.empty()) {
            return undefined
        }
        return this.dataArr[this.dataArr.length - 1]
    }
}
export class CQueue {
    leftStack = new Stack()
    rightStack = new Stack()

    appendTail(x: number) {
        this.leftStack.push(x)
    }

    deleteHead(): number | undefined {
        if (!this.rightStack.empty()) {
            return this.rightStack.pop()
        }
        if (!this.leftStack.empty()) {
            this.reflow()
            return this.deleteHead()
        }
        return -1
    }

    empty() {
        return this.leftStack.empty() && this.rightStack.empty()
    }

    private reflow() {
        while (!this.leftStack.empty()) {
            this.rightStack.push(this.leftStack.pop()!)
        }
    }
}
