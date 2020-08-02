// 1.记忆递归
var numDecodings = function(s) {
  var memo = {}
  function dp(i) {
    if (memo[i] !== undefined) return memo[i]
    if (i === s.length) return 1
    var cnt = 0
    if (s[i] !== '0') cnt += dp(i + 1)
    if (i <= s.length - 2 && s[i] === '1' || (s[i] === '2' && s[i + 1] >= 0 && s[i + 1] <= 6)) cnt += dp(i + 2)
    memo[i] = cnt
    return cnt
  }
  return dp(0)
};

// 2.动态规划
var numDecodings = function(s) {
  if (!s) return 0
  var len = s.length
  var dp = Array(len + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1
  for (var i = 2; i <= len; i++) {
    if (s[i - 1] !== '0') dp[i] += dp[i - 1]
    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] >= 0 && s[i - 1] <= 6)) dp[i] += dp[i - 2]
  }
  return dp[len]
};