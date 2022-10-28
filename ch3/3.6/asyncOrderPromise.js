const fs = require("fs").promises;

// asyncOrder 파일을 여러 번 실행하는 경우
// 파일들이 백그라운드로 넘어가기 때문에 동시에 실행

// but sync 파일을 여러 번 실행한다면?
// sync 파일들 간에도 순서가 정해짐 > 동시에 실행x

let data = await fs.readFile("./readme.txt");
console.log("1번", data.toString());
data = await fs.readFile("./readme.txt");
console.log("2번", data.toString());
data = await fs.readFile("./readme.txt");
console.log("3번", data.toString());
data = await fs.readFile("./readme.txt");
console.log("4번", data.toString());
