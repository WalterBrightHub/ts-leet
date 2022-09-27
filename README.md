# 用 TypeScript 刷 LeetCode

## 环境

以下内容来自官方：

```
TypeScript 4.5.4

Compile Options: --alwaysStrict --strictBindCallApply --strictFunctionTypes --target ES2020

lodash.js 库已经默认被包含。

如需使用队列/优先队列，您可使用 datastructures-js/priority-queue@5.3.0 和 datastructures-js/queue@4.2.1。
```
但实际上提交的时候可以使用 ES2022的 `Array.prototype.at` 函数……
## 模板代码

以 [Problem 2413](https://leetcode.cn/problems/smallest-even-multiple/) 为例：

```ts
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
export const ans = smallestEvenMultiple(5)

console.log(ans)


```

## 运行和提交

使用Deno来快速运行本地ts代码，在此之前需要[安装Deno](https://deno.land/#installation)

本地运行：

```bash
deno run --import-map ./import_map.json  .\problems\2413.ts
```

或者：

```bash
yarn start .\problems\2413.ts
```

提交时，我们只要复制`smallestEvenMultiple`函数的内容就可以了。