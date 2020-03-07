/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = (S: string) => {
    if (S.length === 0) {
        return S
    }
    if (S.length === 2) {
        return ''
    }
    let result = ''
    let count = 0
    let tempStr = ''

    for (let i = 0; i < S.length; i++) {
        const char = S[i]
        tempStr = `${tempStr}${char}`
        if (char === '(') {
            count++
        } else {
            count--
        }

        if (count === 0) {
            result = `${result}${removeOuter(tempStr)}`
            count = 0
            tempStr = ''
        }
    }

    return result
}

const removeOuter = (str: string) => {
    return str.slice(0, str.length - 1)
}