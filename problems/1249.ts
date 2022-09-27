function minRemoveToMakeValid(s: string): string {
  const stack = []
  const sArr = s.split('')
  sArr.forEach((char, index) => {
    if (char === ')') {
      if (stack.length) {
        stack.pop()
      } else {
        sArr[index] = ''
      }
    } else if (char === '(') {
      stack.push(index)
    }
  })
  stack.forEach((i) => (sArr[i] = ''))
  return sArr.join('')
}

export const ans = minRemoveToMakeValid('lee(t(c)o)de)')

console.log(ans)
