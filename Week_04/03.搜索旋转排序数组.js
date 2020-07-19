// 1. 直接解法
var search = function(nums, target) {
  return nums.indexOf(target)
}
// 2. 循环
var search = function(nums, target) {
  for (var i = 0; i< nums.length; i++) {
    if (nums[i] === target) return i
  }
  return -1
}
// 3. 二分查找
var search = function(nums, target) {
  var l = 0
  var r = nums.length - 1
  while (l <= r) {
    var mid = parseInt((l + r) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] >= nums[l]) {
      if (target >= nums[l] && nums[mid] >= target){
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (target <= nums[r] && nums[mid] <= target){
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }
  return -1
}