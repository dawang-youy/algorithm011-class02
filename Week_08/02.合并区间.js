// 1
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  var res = []
  var idx = -1
  for (var interval of intervals) {
    if (idx == -1 || interval[0] > res[idx][1]) {
      res.push(interval)
      idx++
    } else {
      res[idx][1] = Math.max(res[idx][1], interval[1])
    }
  }
  return res
}

// 2
var merge = function(intervals) {
  var result = [], len = intervals.length
  if (len <= 1) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  for (var i = 0; i < len - 1; i++) {
    var left = intervals[i], right = intervals[i + 1]
    if (left[1] >= right[0]) {
      intervals[i + 1] = [left[0], Math.max(left[1], right[1])]
    } else {
      result.push(left)
    }
  }
  result.push(intervals[len - 1])
  return result
}