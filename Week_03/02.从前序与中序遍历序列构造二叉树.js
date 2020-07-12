// 递归
var buildTree = function(preorder, inorder) {
  if(!preorder.length) return null;
  var root = new TreeNode(preorder[0]);
  var index = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
  return root;
};