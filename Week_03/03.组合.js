// 递归
function recusion(start, result, n, k, results) {
  if (result.length === k) {
    results.push(result)
    return
  }
  for (var i = start; i <= n; i++) {
    recusion(i + 1, [...result, i], n, k, results)
  }
}
var combine = function (n, k) {
  var results = []
  recusion(1, [], n, k, results)
  return results
}

// 回溯
var combine = function (n, k) {
  var res = []
  var could = []
  if(k === 0){
    return [[]]
  }
  function dfs(start, n, k, res, could){
    if(could.length === k){
      res.push(could.slice(0))
      return
    }
    for(var i = start; i < n + 1; i++){
      could.push(i);
      dfs(i+1, n, k, res, could);
      could.pop()
    }
    return res;
  }
  return dfs(1, n, k, res, could)
}