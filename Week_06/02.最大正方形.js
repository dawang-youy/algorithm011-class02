var maximalSquare = function(matrix) {
  var i = j = 0, max = 0
  while (i < matrix.length) {
    if (i > 0 && j > 0) {
      if (matrix[i][j] == 1) {
        matrix[i][j] = (Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1)
      } else {
        matrix[i][j] = 0
      }
    }            
    max = Math.max(max, matrix[i][j])
    j++
    if (j == matrix[0].length) {
      j = 0
      i++
    }
  }
  return max * max
};

var maximalSquare = function(matrix) {
  if (matrix.length === 0) return 0
  var dp = []
  var rows = matrix.length
  var cols = matrix[0].length
  var max = Number.MIN_VALUE
  for (var i = 0; i < rows + 1; i++) {
    if (i === 0) {
      dp[i] = Array(cols + 1).fill(0)
    } else {
      dp[i] = [0]
    }
  }
  for (var i = 1; i < rows + 1; i++) {
    for (var j = 1; j < cols + 1; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }
  return max * max
};