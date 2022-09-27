function removeDuplicates(s: string, k: number): string {
  let stack = Array(s.length).fill(0)
  let pointer = 0
  const compose = () => {
    if (pointer < k) {
      return false
    }
    let char = stack[pointer - 1]
    for (let i = pointer - 2; i >= pointer - k; i--) {
      if (stack[i] !== char) {
        return false
      }
    }
    return true
  }
  for (const char of s) {
    stack[pointer++] = char
    while (compose()) {
      pointer -= k
    }
  }
  return stack.slice(0,pointer).join('')
}

export const ans = removeDuplicates('pbbcggttciiippooaais', 2)

console.log(ans)
