var permute = function(nums) {
  var res = []
  dfs([])
  function dfs(path) {
    if (path.length === nums.length) {
      res.push(path.slice())
    }
    for (var num of nums) {
      if (path.includes(num)) continue
      path.push(num)
      dfs(path)
      path.pop()
    }
  }
  return res
};