/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var TrieNode = function (val) {
  this.val = val
  this.isWord = false
  this.children = new Map()
}

var Trie = function() {
  this.root = new TrieNode(null)
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  var node = this.root
  for (var c of word) {
    if (!node.children.has(c)) node.children.set(c, new TrieNode(c))
    node = node.children.get(c)
  }
  node.isWord = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  var node = this.root
  for (var c of word) {
    if (!node.children.has(c)) return false
    node = node.children.get(c)
  }
  return node.isWord
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  var node = this.root
  for (var c of prefix) {
    if (!node.children.has(c)) return false
    node = node.children.get(c)
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */