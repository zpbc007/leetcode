class Stack<T> {
    private arr: T[] = []

    push(item: T) {
        this.arr.push(item)
    }

    pop() {
        return this.arr.pop()
    }

    get size() {
        return this.arr.length
    }
}

const Left = ['(', '{', '[']
const Right = [')', '}', ']']

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s: string) => {
    if (s.length % 2 !== 0) {
        return false
    }
    const stack = new Stack<string>()
    const isLeft = (character: string) => Left.includes(character)

    for (let item of s) {
        if (isLeft(item)) {
            stack.push(item)
        } else {
            const leftChar = stack.pop()
            if (!leftChar) {
                return false
            }
            const leftIndex = Left.indexOf(leftChar)
            const rightIndex = Right.indexOf(item)
            if (leftIndex !== rightIndex) {
                return false
            }
        }
    }

    if (stack.size > 0) {
        return false
    }

    return true
};