/**
 * 1.遍历数组 利用数组splice方法 删除重复的元素
 * 时间复杂度 o(n^2)
 * */ 
var removeDuplicates = function(nums) {
  if (nums.length < 1) return 0
  for (var i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) nums.splice(i, 1)
  }
  return nums.length
};
/** 
 * 2.双指针
 * 时间复杂度o(n)
 * i 是慢指针，j 是快指针，如果 nums[i] === nums[j]，那么就继续向后走，直到遇到 nums[i] !== nums[j]，此时就把 nums[i] 赋值为 nums[j]
 * 第 i + 1 个元素为重复的最大值 题目说明解释了这种情况 如要返回去重的nums 需要删除后面的元素
 * */
var removeDuplicates = function(nums) {
  if (nums.length < 1) return 0
  var i = 0
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      if (j > i) {
        nums[i] = nums[j]
      }
    }
  }
  return i + 1
};