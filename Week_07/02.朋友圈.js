/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
// dfs
var findCircleNum = function(M) {
  var visited = new Array(M.length).fill(0)
  var res = 0
  for (var i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      visited[i] = 1
      dfs(i)
      res++
    }
  }
  return res
  function dfs(i) {
    for (var j = 0; j < M.length; j++) {
      if (i !== j && !visited[j] && M[i][j]) {
        visited[j] = 1
        dfs(j)
      }
    }
  }
};
// bfs
var findCircleNum = function(M) {
  var visited = new Array(M.length).fill(0)
  var res = 0
  var queue = []
  for (var i = 0; i < M.length; i++) {
    if (!visited[i]) {
      visited[i] = 1
      res++
      queue.push(i)
    }
    while (queue.length) {
      var curr = queue.shift()
      for (var j = 0; j < M.length; j++) {
        if (curr !== j && M[curr][j] && !visited[j]) {
          queue.push(j)
          visited[j] = 1
        }
      }
    }
  }
  return res
}
// 并查集
var findCircleNum = function(M) {
  var count = M.length
  var parents = Array.from(M).map((item, index) => index)
  function find(x) {
    if (parents[x] === x) return x
    return (parents[x] = find(parents[x]))
  }
  function union(x, y) {
    if (find(x) === find(y)) return
    parents[parents[x]] = parents[y]
    count--
  }
  for (var i = 0; i < M.length; i++) {
    for (var j = i + 1; j < M[i].length; j++) {
      if (M[i][j]) union(i, j)
    }
  }
  return count
}