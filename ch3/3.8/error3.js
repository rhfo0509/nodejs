const fs = require("fs").promises;

// 프로미스의 에러는 따로 처리하지 않아도 됨
// (catch를 안 붙혀도 서비스가 멈추지 않는 다는 뜻)
// (다만 웬만하면 catch를 붙이는 습관을 들이는 것을 추천)
setInterval(() => {
  fs.unlink('./anonymous.js');
}, 1000);