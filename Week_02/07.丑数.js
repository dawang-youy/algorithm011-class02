/* 
* 题目没看明白  看了题解做的 丑数的定义1是：把只包含质因子2、3和5的数称作丑数（Ugly Number）。
* 例如6、8都是丑数，但7、14不是，因为它们包含质因子7。 习惯上我们把1当做是第一个丑数。
* 1.动态规划 存储前面的丑数
*/

var uthUglyNumber = function(n) {
  if (!n) return 0;
  let res = [1], // 存储丑数的数组
      count2 = 0,// 质因子2的计数器
      count3 = 0,// 质因子3的计数器
      count5 = 0 // 质因子5的计数器
  for(let i = 1;i < n;i++){
    res[i] = Math.min(res[count2] * 2, res[count3] * 3, res[count5] * 5) // 丑数最小值
    // 最小丑数等于存储丑数数组索引的值，相应的质因子计数器+1
    res[i] == res[count2]*2 && count2++
    res[i] == res[count3]*3 && count3++
    res[i] == res[count5]*5 && count5++
  }
  return res[n - 1]
}

/*
* 2.最小堆
* 借助最小堆，可以在 O(LogN)O(LogN) 时间复杂度内找到当前最小的元素。整体算法流程是：
*   准备最小堆 heap。准备 map，用于记录丑数是否出现过。
*   将 1 放入堆中
*   从 0 开始，遍历 n 次：
*   取出堆顶元素，放入数组 res 中
*   用堆顶元素依此乘以 2、3、5
*   检查结果是否出现过。若没有出现过，那么放入堆中，更新 map
*   返回 res 最后一个数字 
* javascript 执行很慢
**/

const defaultCmp = (x, y) => x > y
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])
class Heap {
  /**
   * 默认是最大堆
   * @param {Function} cmp
   */
  constructor(cmp = defaultCmp) {
    this.container = []
    this.cmp = cmp
  }
  insert(data) {
    const { container, cmp } = this
    container.push(data)
    let index = container.length - 1
    while (index) {
      let parent = Math.floor((index - 1) / 2);
      if (!cmp(container[index], container[parent])) {
        return
      }
      swap(container, index, parent)
      index = parent
    }
  }
  extract() {
    const { container, cmp } = this
    if (!container.length) {
      return null
    }
    swap(container, 0, container.length - 1)
    const res = container.pop()
    const length = container.length
    let index = 0,
        exchange = index * 2 + 1
    while (exchange < length) {
      // 如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2
      if (right < length && cmp(container[right], container[exchange])) {
          exchange = right
      }
      if (!cmp(container[exchange], container[index])) {
          break
      }
      swap(container, exchange, index)
      index = exchange
      exchange = index * 2 + 1
    }
    return res
  }
  top() {
    if (this.container.length) return this.container[0]
    return null
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const heap = new Heap((x, y) => x < y)
  const res = new Array(n)
  const map = {}
  const primes = [2, 3, 5]
  heap.insert(1)
  map[1] = true
  for (let i = 0; i < n; ++i) {
    res[i] = heap.extract();
    for (var prime of primes) {
      let tmp = res[i] * prime
      if (!map[tmp]) {
        heap.insert(tmp)
        map[tmp] = true
      }
    }
  }
  return res[n - 1]
}