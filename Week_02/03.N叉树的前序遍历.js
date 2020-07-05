//  属于基础的 代码模版 要牢记

// 1.递归
var preorder = function(root) {
  if (!root) return []
  var res = []
  recusion(root)
  return res
  function recusion(root) {
    if (!root) return
    res.push(root.val)
    for (var i = 0; i < root.children.length; i++) {
      recusion(root.children[i])
    }
  }
};
// 2.迭代
var preorder = function(root) {
  if (!root) return []
  var res = [], arr = [root]
  while (arr.length) {
    var current = arr.pop()
    res.push(current.val)
    for (var i = current.children.length - 1; i >= 0; i--) {
      arr.push(current.children[i])
    }
  }
  return res
}