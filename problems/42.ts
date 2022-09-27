function trap(height: number[]): number {
  const al = Array(height.length).fill(0)
  const ar = Array(height.length).fill(0)
  let tl = 0,
    tr = 0
  for (let i = 0; i < height.length; i++) {
    al[i] = tl = Math.max(tl, height[i])
    ar[height.length - 1 - i] = tr = Math.max(tr, height[height.length - 1 - i])
  }

  return height.reduce((res, curr, i) => Math.min(al[i], ar[i]) - curr + res, 0)
}

let ans = trap([4, 2, 0, 3, 2, 5])

console.log(ans)
