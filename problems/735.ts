function asteroidCollision(asteroids: number[]): number[] {
  const stack = []
  for (const a of asteroids) {
    if (a < 0) {
      let aDie = false
      while (stack.at(-1) > 0) {
        const res = stack.at(-1) + a
        if (res === 0) {
          stack.pop()
          aDie = true
          break
        } else if (res > 0) {
          aDie = true
          break
        } else {
          stack.pop()
        }
      }
      if (!aDie) {
        stack.push(a)
      }
    } else {
      stack.push(a)
    }
  }
  return stack
}

export const ans = asteroidCollision([10, 2, -5])

console.log(ans)
