/** 
 * 1. 递归方式 两个链表头部值较小的一个节点与剩下元素的合并操作结果合并。
 * 时间复杂度 o(两个链表长度)
 * 空间复杂度 递归调用占用栈空间 o(链表长度之和)
*/
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};
/** 
 * 2.迭代 判断 l1和l2 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，
 * 当一个节点被添加到结果里之后，将对应链表中的节点向后移一位。
 * 时间复杂度 o(l1长度 + l2长度)
 * 空间复杂度 o(1)
*/
var mergeTwoLists = function(l1, l2) {
  var prevHead = new ListNode(-1)
  var prev = prevHead
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 == null ? l2 : l1
  return prevHead.next
}