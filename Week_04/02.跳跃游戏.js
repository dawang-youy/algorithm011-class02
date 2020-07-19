// 1. 动态规划
var canJump = function(nums) {
  if(nums.length === 0) return true
  var preMax = -Infinity
  for(var i = 0; i < nums.length; i++) {
    var max = Math.max(preMax - 1, nums[i])
    if(max === 0 && i !== nums.length - 1) {
      return false; 
    }
    preMax = max
  }
  return true
}

// 2. 贪心算法
var canJump = function(nums) {
  if (nums.length === 0) return false
  var endReachable = nums.length - 1
  for (var i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= endReachable) endReachable = i
  }
  return endReachable === 0
}