 // 递归遍历，判断是不是重复的元素,每个元素是第一个，剩余的再递归，最后合并数组。
 var permuteUnique = function(nums) {
  if (nums.length === 1) {
    return [nums]
  }
  var results = []
  nums.forEach(function(v, i) {
    if (nums.indexOf(v) === i) {
      var subs = [...nums]
      subs.splice(i, 1)
      results = results.concat(permuteUnique(subs).map(function(v2) {
        return [v, ...v2]
      }))
    }
  })
  return results
}