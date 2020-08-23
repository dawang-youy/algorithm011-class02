// 1.
var lengthOfLIS = function(nums) {
  var tails = []
  nums.forEach((num) => {
    var left = 0, right = tails.length - 1, mid
    while(left <= right) {
      mid = left + parseInt((right - left) / 2)
      if (tails[mid] < num) {
        left = mid + 1
      } else if (tails[mid] > num) {
        right = mid - 1
      } else if (tails[mid] === num) {
        right = mid - 1
      }
    }
    tails[left] = num
  })
  return tails.length
};

// 2.
var lengthOfLIS = function(nums) {
  var n = nums.length
  if(!n) return 0
  var dp = new Array(n).fill(1)
  for(var i = 1; i < n; i++){
      for(var j = 0; j < i; j++) if(nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
  }
  return Math.max(...dp)
};
