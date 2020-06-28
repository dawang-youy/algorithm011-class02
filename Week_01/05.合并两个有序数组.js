/** 
 * 1.利用数组 现有方法 几次不通过之后 改用面向用例编程😄
*/
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  var len = nums1.length
  var arr = nums1.splice(m + n, len - m - n)
  nums1.sort((a, b) => a - b).splice(m + n, len - n - m, ...arr)
};

/**  
 * 2.对比替换 
*/
var merge = function(nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    if (nums2[n - 1] > nums1[m - 1]) {
      nums1[m + n - 1] = nums2[--n];
    } else {
      nums1[m + n - 1] = nums1[--m];
    }
  }
  while (n > 0) {
    nums1[n - 1] = nums2[--n];
  }
}