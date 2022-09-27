// do not copy these imports !!!
import _ from 'lodash'
import {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} from '@datastructures-js/priority-queue'
import { Queue } from '@datastructures-js/queue'

// do not copy imports above !!!
const partner={
  '[':']',
  '{':'}',
  '(':')'
}
function isValid(s: string): boolean {
  const stack = []
  s.split('').forEach((char) => {
    if (partner[stack.at(-1)] === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  })
  return stack.length === 0
}

// test
const ans = isValid('[](){}')

console.log(ans)
