/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  var wordListSet = new Set(wordList)
  if (!wordListSet.has(endWord)) return 0
  var beginSet = new Set()
  beginSet.add(beginWord)
  var endSet = new Set()
  endSet.add(endWord)
  var level = 1
  while (beginSet.size > 0) {
    var nextBeginSet = new Set()
    for (var key of beginSet) {
      for (var i = 0; i < key.length; i++) {
        for (var j = 0; j < 26; j++) {
          var s = String.fromCharCode(97 + j)
          if (s !== key[i]) {
            var newWord = key.slice(0, i) + s + key.slice(i + 1)
            if (endSet.has(newWord)) return level + 1
            if (wordListSet.has(newWord)) {
              nextBeginSet.add(newWord)
              wordListSet.delete(newWord)
            }
          }
        }
      }
    }
    beginSet = nextBeginSet
    level++
    if (beginSet.size > endSet.size) [beginSet, endSet] = [endSet, beginSet]
  }
  return 0
};