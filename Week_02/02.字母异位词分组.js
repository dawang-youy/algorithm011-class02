// 1. hashmap + javascript 数组方法
var groupAnagrams = function(strs) {
  var hash = new Map()
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i].split('').sort().join()
    if (hash.has(str)) {
      var temp = hash.get(str)
      temp.push(strs[i])
      hash.set(str, temp)
    } else {
      hash.set(str, [strs[i]])
    }
  }
  return [...hash.values()]
};

// 2.计数 同leetcode-242 字母异位词 利用26个字母的ascll码值 在数组中记数
// 改变 str = strs[i].split('').sort().join()
var groupAnagrams = function(strs) {
  var hash = new Map()
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i]
    var arr = Array(26).fill(0)
    for (var j = 0; j < str.length; j++) {
      arr[str.charCodeAt(j) - 97]++
    }
    var hashKey = arr.join()
    if (hash.has(hashKey)) {
      var temp = hash.get(hashKey)
      temp.push(str)
      hash.set(hashKey, temp)
    } else {
      hash.set(hashKey, [str])
    }
  }
  return [...hash.values()]
}

/** 
 * 3.利用数学设计键
 * 算术基本定理，又称为正整数的唯一分解定理，即：每个大于1的自然数，要么本身就是质数，要么可以写为2个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。
    利用这个，我们把每个字符串都映射到一个正数上。
    用一个数组存储质数 prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]。
    然后每个字符串的字符减去 ' a ' ，然后取到 prime 中对应的质数。把它们累乘。
    例如 abc ，就对应 'a' - 'a'， 'b' - 'a'， 'c' - 'a'，即 0, 1, 2，也就是对应素数 2 3 5，然后相乘 2 * 3 * 5 = 30，就把 "abc" 映射到了 30。
    相减时用 Unicode 编码。
*/
var groupAnagrams = function(strs) {
  var res = {}
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i]
    var hash = 1
    for (var j = 0; j < str.length; j++) {
      hash *= [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103][str.charCodeAt(j) - 97]
    }
    res[hash] ? res[hash].push(str) : res[hash] = [str]
  }
  return Object.values(res)
}

// 以上方法 都是利用哈希表键 收集相同异位词 区别在于生成键的方式不同