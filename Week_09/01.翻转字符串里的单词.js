// 1.
var reverseWords = function(s) {
  return s.split(' ').reverse().join(' ').replace(/\s+/g, ' ').trim()
};

// 2.
var reverseWords = function(s) {
  var left = 0
  var right = s.length - 1
  var queue = []
  var word = ''
  while (s.charAt(left) === ' ') left ++
  while (s.charAt(right) === ' ') right --
  while (left <= right) {
      var char = s.charAt(left)
      if (char === ' ' && word) {
          queue.unshift(word)
          word = ''
      } else if (char !== ' '){
          word += char
      }
      left++
  }
  queue.unshift(word)
  return queue.join(' ')
};