function maxDepth(s: string): number {
  let ans = 0
  let curr = 0
  for (let char of s) {
    if (char === '(') {
      curr++
      ans = ans < curr ? curr : ans
    } else if (char === ')') {
      curr--
    }
  }
  return ans
}

export const ans = maxDepth('(1+(2*3)+((8)/4))+1')

console.log(ans)
