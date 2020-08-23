// 1.
var reverseWords = function(s) {
  var arr = []
  s.split(' ').forEach(item => {
      arr.push(item.split('').reverse().join(''))
  })
  return arr.join(' ')
};

// 2.
var reverseWords = function(s) {
  function reverseString(str) {
    if (str === "") return ""
    else return reverseString(str.substr(1)) + str.charAt(0)
  }
  return s.split(' ').map(item => reverseString(item)).join(' ')
};