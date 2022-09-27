function simplifyPath(path: string): string {
  let dirs = path.replace(/\/\/+/g, '/').split('/')
  if (dirs.at(-1) === '') {
    dirs.pop()
  }
  if (dirs.at(0) === '') {
    dirs.shift()
  }
  const stack = []
  for (let dir of dirs) {
    if (dir === '.') {
    } else if (dir === '..') {
      stack.pop()
    } else {
      stack.push(dir)
    }
  }

  return '/' + stack.join('/')
}

let ans = simplifyPath('/a/./b/../../c/')

console.log(ans)
export {}
