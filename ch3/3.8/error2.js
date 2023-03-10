const fs = require("fs");

// 콜백함수에서 에러 객체를 제공하는 경우
// 노드가 기본적으로 제공하는 비동기 메서드의 콜백 에러는 노드 프로세스를 멈추지는 않음
setInterval(() => {
  fs.unlink("./anonymous.js", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
