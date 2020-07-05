// 1.递归
var preorderTraversal = function(root) {
  return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : []
};
// 2.迭代
var preorderTraversal = function(root) {
  if (!root) return []
  var printArr = []
  var stack = []
  stack.push(root)
  while (stack.length > 0) {
    var popValue = stack.pop()
    printArr.push(popValue.val)
    popValue.right && stack.push(popValue.right)
    popValue.left && stack.push(popValue.left)
  }
  return printArr
}

// 二叉树的 前 中 后序 遍历 基础代码 要牢记