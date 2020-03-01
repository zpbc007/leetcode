export const isValid = (s: string) => {
    // ""
    if (s.length === 0) {
        return true
    }
    // 长度为奇数
    if (s.length % 2 !== 0) {
        return false
    }
    const map: {[key: string]: string} = {
        "{": "}",
        "(": ")",
        "[": "]",
    }
    const stack: Array<keyof typeof map> = []

    for (let item of s) {
        if (map[item]) { // 左括号
            stack.push(item)
        } else { // 右括号
            if (map[stack.pop()!] !== item) {
                return false
            }
        }
    }

    if (stack.length > 0) {
        return false
    }

    return true
}