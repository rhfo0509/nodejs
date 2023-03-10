const fs = require("fs").promises;
const constants = require("fs").constants;

// 파일의 존재 여부(existsSync)/상태(stat) 확인
// fs.existsSync
// fs.stat

// F_OK: 파일 존재 여부 / W[R]_OK: 읽기[쓰기] 권한 여부
fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    // 이미 폴더 있을 때 이동경로
    // 1
    return Promise.reject("이미 폴더 있음");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("폴더 없음");
      return fs.mkdir("./folder");
    }
    // 2
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 만들기 성공");
    return fs.open("./folder/file.js", "w");
  })
  .then((fd) => {
    console.log("빈 파일 만들기 성공", fd);
    fs.rename("./folder/file.js", "./folder/newfile.js");
  })
  .then(() => {
    console.log("이름 바꾸기 성공");
  })
  .catch((e) => {
    // 3
    console.error(e);
  });
