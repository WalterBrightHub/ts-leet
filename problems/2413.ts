// do not copy these imports !!!
import _ from 'lodash'
import {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} from '@datastructures-js/priority-queue'
import { Queue } from '@datastructures-js/queue'

// do not copy imports above !!!

function smallestEvenMultiple(n: number): number {
   return n & 1 ? n * 2 : n
}

// test
const ans=smallestEvenMultiple(5)

console.log(ans)