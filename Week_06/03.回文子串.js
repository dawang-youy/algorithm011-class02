var countSubstrings = function(s) {
  var count = 0
  for (var i = 0; i < s.length; i++) {
    for (var j = i; j < s.length; j++) {
      if (isPradrome(s, i, j)) count++
    }
  }
  function isPradrome(s, start, end) {
    while (start < end) {
      if (s[start] != s[end]) return false
      start++
      end--
    }
    return true
  }
  return count
};

var countSubstrings = function (s) {
  var dp = new Array(s.length).fill('').map(() => new Array(s.length).fill(false))
  var num = 0
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
        num++
      }
    }
  }
  return num
};