// 1.递归
var inorderTraversal = function(root) {
  return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
};

// 2.迭代
/**
 * 解题思路:
 *  中序遍历，先要将最左边的节点全部加入栈中，然后逐个pop出来
 *  核心思想注意，将右子树重置为root，进行下一步的循环。
 *  两个while嵌套，中间的就是继续存放子树的节点
 */
var inorderTraversal = function(root) {
  var arr = []
  var stackArr = []
  while (root != null || stackArr.length) {
    while (root != null) {
      stackArr.push(root)
      root = root.left
    }
    root = stackArr.pop()
    arr.push(root.val)
    root = root.right
  }
  return arr
}

// 3.优化代码
var inorderTraversal = function(root) {
  var nums = []
  var arr = []
  var currentRoot = root
  while (arr.length > 0 || currentRoot) {
    if (currentRoot) {
      arr.push(currentRoot)
      currentRoot = currentRoot.left
    } else { 
      var p = arr.pop()
      nums.push(p.val)
      currentRoot = p.right
    }
  }
  return nums
}