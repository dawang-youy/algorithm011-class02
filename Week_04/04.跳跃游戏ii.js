// 贪心解法
var jump = function (nums) {
  var end = 0
  var step = 0
  var maxCross = 0
  for (var i = 0; i < nums.length-1; i++) {
    maxCross = Math.max(maxCross, nums[i] + i)
    if (i === end) {
      end = maxCross
      step++
    }
  }
  return step
};