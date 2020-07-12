// 递归
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) return root;
  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root;
  return left || right;
};