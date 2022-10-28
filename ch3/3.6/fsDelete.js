const fs = require("fs").promises;

// readdir: 폴더 안의 내용물 확인
fs.readdir("./folder")
  .then((dir) => {
    console.log("폴더 내용 확인", dir);
    // unlink: 파일 지우기 (파일이 있는지 확인 必)
    return fs.unlink("./folder/newFile.js");
  })
  .then(() => {
    console.log("파일 삭제 성공");
    // rmdir: 폴더 지우기 (폴더 내 파일이 없어야 함)
    return fs.rmdir("./folder");
  })
  .catch((err) => {
    console.error(err);
  });
