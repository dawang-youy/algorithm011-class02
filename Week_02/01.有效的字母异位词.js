/** 
 * 考点不是排序
*/
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};
/** 
 * map 哈希表来解
*/
var isAnagram = function(s, t) {
  var map = new Map()
  for (var i = 0; i < s.length; i++) {
    var getMap = map.get(s[i])
    !getMap ? map.set(s[i], 1) : map.set(s[i], getMap + 1)
  }
  for (var i = 0; i < t.length; i++) {
    var getMap = map.get(t[i])
    if (getMap === 1) {
      map.delete(t[i])
    } else if (getMap) {
      map.set(t[i], getMap - 1)
    } else {
      map.set(t[i], 1)
    }
  }
  return !map.size
}

/** 
 * 首先比较字符串相等 
 * 其次比较两个字符串长度
 * 最后 利用26个字母的ascll码值 做为初始数组（元素都为0）的索引 遍历字符串 执行加1 减1操作
 * 遍历后的数组元素都为0 表示相等
*/
var isAnagram = function(s, t) {
  if (s === t) return true
  if (s.length !== t.length) return false
  var arr = new Array(26).fill(0)
  for(let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++
    arr[t.charCodeAt(i) - 97]--
  }
  return arr.every(a => a === 0)
}