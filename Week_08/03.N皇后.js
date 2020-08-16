// 1
var solveNQueens = function(n) {
  var result = []
  function dfs(cols) {
    var row = cols.length
    if (row === n) return result.push(cols.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col -1)))
    for (var col = 0; col < n; col++) {
      if(cols.some((exCol, exRow) => (exCol === col || exRow - exCol === row - col || exRow + exCol === row + col))) continue
      dfs(cols.concat(col))
    }
  }
  dfs([])
  return result
}

// 2
var solveNQueens = function(n) {
  var answers = [], ld_last = [], rd_list = [], col_list = [], queens = []
  function isNotUnderAttack(row, col) {
    return !col_list[col] && !ld_last[col - row] && !rd_list[row + col]
  }
  function placeQueen(row, col) {
    queens.push(col)
    col_list[col] = true
    ld_last[col - row] = true
    rd_list[row + col] = true
  }
  function removeQueen(row, col) {
    queens.pop(col)
    col_list[col] = false
    ld_last[col - row] = false
    rd_list[row + col] = false
  }
  function addSolution() {
    var answer = []
    for (let i = 0; i < n; ++i) {
      let col = queens[i], sb = ''
      for (let j = 0; j < col; ++j) sb += '.'
      sb += 'Q'
      for (let j = 0; j < n - col - 1; ++j) sb += '.'
      answer.push(sb)
    }
    answers.push(answer)
  }
  function backtrack(row) {
    for (var col = 0; col < n; col++) {
      if (isNotUnderAttack(row, col)) {
        placeQueen(row, col)
        if (row + 1 == n) addSolution()
        else backtrack(row + 1)
        removeQueen(row, col)
      }
    }
  }
  backtrack(0)
  return answers
}

// 3
var solveNQueens = function(n) {
  var answers = [], upperlim = (1 << n) - 1, queens = []
  function addSolution() {
    var answer = []
    for (let i = 0; i < n; ++i) {
      let col = queens[i], sb = '';
      for (let j = 0; j < col; ++j) sb += '.';
      sb += 'Q'
      for (let j = 0; j < n - col - 1; ++j) sb += '.';
      answer.push(sb)
    }
    answers.push(answer)
  }

  function backtrack(col, ld, rd) {
    if (col === upperlim) {
      addSolution()
    } else {
      var pos = upperlim & ~(col | ld | rd)
      while (pos) {
        var current = pos & (~pos + 1)
        pos -= current
        queens.push(n - 1 - Math.log2(current))
        backtrack(col | current, upperlim & (ld | current) >> 1, upperlim & (rd | current) << 1)
        queens.pop()
      }
    }
  }
  backtrack(0, 0, 0)
  return answers
}