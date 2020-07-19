// 1. 一般解法
var lemonadeChange = function(bills) {
  if(bills[0] !== 5) return false
  var m5 = 0
  var m10 = 0
  for (var item of bills){
    switch(item) {
      case 5: {m5++; break;} 
      case 10: {m10++, m5--; break;}
      case 20: if (m10 > 0) {m10--, m5--;}
              else {m5 -= 3;}
              break
    }   
    if(m5<0) {
      return false
    }
  }
  return true
};

// 2.贪心算法
var lemonadeChange = function(bills) {
  var five = 0, ten = 0, len = bills.length
  for (var i = 0; i < len; i++) {
    if(bills[i] === 5) {
      five++
    } else if(bills[i] === 10) {
      if(five === 0) {
        return false
      }
      five--
      ten++
    } else if(bills[i] === 20) {
      if(ten >0 && five > 0) {
        ten--
        five--
      } else if(five >= 3) {
        five -= 3
      } else {
        return false
      }
    }
  }
  return true
}