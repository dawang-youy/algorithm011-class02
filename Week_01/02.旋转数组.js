/**
 * 1.暴力枚举 这个方法没有第一时间想出来 习惯用数组方法
 */
var rotate = function(nums, k) {
  var len = nums.length;
  var tmpEnd = 0;
  var tmpPrev = 0;
  for(var i = 0;i < k; i++){
    tmpEnd = nums[len - 1];
    for(var r = 0;r < len; r++){
      tmpPrev = nums[r];
      nums[r] = tmpEnd;
      tmpEnd = tmpPrev;
    }
  }
};

// 2.利用数组pop unshift 方法循环k次 数组末尾替换数组头部
var rotate = function(nums, k) {
  for(var i = 0;i<k;i++){
    nums.unshift(nums.pop())
  }
}
/** 
 * 3.反转数组 这个方法 leetcode没有执行成功？
*/
var rotate = function(nums, k) {
  var n = nums.length
  var j = n - k % n
  j !== 0 && (nums = nums.slice(j).concat(nums.slice(0, j)))
}

/** 
 * 4.参照方法 2 leetcode实际执行这个方法最快
*/
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k, k));
}

/** 
 * 5. 参考题解
*/
var rotate = function(nums, k) {
  var n = nums.length;
  k %= n;
  if (n === 1){
    return;
  }
  var tmp = 0;
  myReverse(0 ,n-1);
  myReverse(0, k-1);
  myReverse(k, n-1);
  function myReverse(start, end) {
    while (start < end) {
      tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      start++;
      end--;
    }
  }
}