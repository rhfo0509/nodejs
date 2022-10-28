const { exec } = require("child_process");

// 터미널에서 dir 명령어를 치는 것과 동일
const process = exec("dir");

// console(process.stdout)에 data가 나오면 출력
process.stdout.on("data", (data) => {
  console.log(data.toString());
});

process.stderr.on("data", (data) => {
  console.log(data.toString("utf8"));
});
