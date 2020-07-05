// 1. hash javascript居然跑出了超过 99%
var topKFrequent = function(nums, k) {
  var hash = new Map()
  for (var i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      var temp = hash.get(nums[i])
      temp++
      hash.set(nums[i], temp)
    } else {
      hash.set(nums[i], 1)
    }
  }
  return [...hash.keys()].sort((a, b) => hash.get(b) - hash.get(a)).slice(0, k)
}