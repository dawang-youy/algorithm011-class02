// 1.递归
var levelOrder = function(root) {
  var res = []
  root && search(root, 0, res)
  return res
};
function search(root, level, tar) {
  tar[level] = tar[level] || []
  tar[level].push(root.val)
  root.children.forEach(item => search(item, level + 1, tar))
}

// 2.BFS
var levelOrder = function(root) {
  if (!root) return []
  let queue = [root]
  let ans = []
  while(queue.length) {
    let level = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let current = queue.shift()
      level.push(current.val)
      if (current.children && current.children.length > 0) {
        queue.push(...current.children)
      }
    }
    ans.push(level)
  }
  return ans
}