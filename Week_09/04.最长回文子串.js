// 1.
var longestPalindrome = function(s) {
  if (!s || s.length === 0) return ""
  var res = s[0]
  var dp = []
  for (var i = s.length - 1; i >= 0; i--) {
    dp[i] = []
    for (var j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true
      else if (s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true
      if (dp[i][j] && j - i + 1 > res.length) res = s.slice(i, j + 1)
    }
  }
  return res
};

// 2.
var longestPalindrome = function(s) {
  if(!s || s === "") return s
  var max = s[0]
  var loop = 0
  while(loop < s.length && max.length <= s.length - loop) {    
    var idx = Math.floor((s.length - 1) / 2) + Math.ceil(loop / 2) * (loop % 2 ? 1 : -1)
    var n = 0
    var same = 0
    var isBreak  = false
    while(idx - n - 1 >= 0 && s[idx - n - 1] == s[idx + n + 1]) {
      if (!isBreak && s[idx] == s[idx + n + 1]) {
        same++
      } else {
        isBreak = true
      }
      n++
    }
    max =  n * 2 + 1 > max.length ? s.slice(idx - n, idx + n + 1) : max
    if(s[idx] == s[idx + same + 1] && s[idx] != s[idx - same - 1]){
      n = same
      while(idx - n - 1 >= 0 && s[idx - n - 1] == s[idx + n + 2]) n++
      max =  n * 2 + 2 > max.length ? s.slice(idx - n, idx + n + 2) : max
    }
    loop++
  }
  return max
};

// 3.
var longestPalindrome = function(s) {
  var str = ''
  var i = 0
  if (s.length <= 1) return s
  while(i < s.length - 1) {
      var l = i
      var r = i
      while(r + 1 < s.length && s[i] === s[r + 1]) r++
      i = r + 1
      while(l - 1 > -1 && r + 1 < s.length && s[l - 1] === s[r + 1]) {
          l--
          r++
      }
      if (r - l + 1 > str.length) str = s.substring(l, r+1)
  }
  return str
};
