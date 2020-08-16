// 1
var isPowerOfTwo = function(n) {
  return Number.isInteger(Math.log2(n));
}

// 2
var isPowerOfTwo = function(n) {
  while(n > 1){
    n /= 2
  }
  return n === 1
}

// 3
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0
}

// 4
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (-n)) == n
}
