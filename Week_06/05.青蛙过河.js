var canCross = function(stones) {
  if (stones[1] != 1) return false
  var dp = Array.from(new Array(stones.length), () => new Array(stones.length).fill(false)),
      map = new Map()
  dp[0][0] = dp[0][1] = true
  for (var i = 0; i < stones.length; i++) map.set(stones[i], i)
  for (var i = 1; i < stones.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      var distance = 2 * stones[j] - stones[i]
      dp[j][i] = map.has(distance) && dp[map.get(distance)][j] || map.has(distance - 1) && dp[map.get(distance - 1)][j] || map.has(distance + 1) && dp[map.get(distance + 1)][j]
      if (i === dp[0].length - 1 && dp[j][i] === true) return true
    }
  }
  return false
};

var canCross = function (stones) {
  if (stones.length <= 1) return true
  var offset = [-1, 0, 1]
  var target = stones[stones.length - 1]
  var memo = new Map()
  stones = new Set(stones)
  return backTracing(1, 1)
  function backTracing (pos, k) {
    var key = [pos, k].join(',')
    if (!memo.has(key)) {
      var result = false
      if (pos === target) result = true
      else if (stones.has(pos)) {
        result = offset.some(change => {
          var next = k + change
          if (next > 0) {
            var nextPos = pos + next
            return backTracing(nextPos, next)
          } else {
            return false
          }
        })
      }
      memo.set(key, result)
    }
    return memo.get(key)
  }
}