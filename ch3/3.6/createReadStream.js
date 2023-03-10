// 일정한 크기로 나눠서 여러 번에 걸쳐서 처리
// 버퍼(or 청크)의 크기를 작게 만들어 주기적으로 데이터를 전달
// 스트리밍: 일정한 크기의 데이터를 지속적으로 전달하는 작업

// 파일을 한꺼번에 읽으려면 : readFile
// 파일을 chunk 단위로 쪼개어 읽으려면 : createReadStream
// createReadStream의 chunk 크기 기본값은 64KB이다.

// stream 방식 ( 메모리 절약, 대용량 파일 서버에 적합 )

const fs = require("fs");
const readStream = fs.createReadStream("./readmeStream.txt", {
  highWaterMark: 16,
});

const data = [];
readStream.on("data", (chunk) => {
  data.push(chunk);
  // 스트림 데이터는 순서대로 도착함
  console.log("data:", chunk, chunk.length);
});
readStream.on("end", () => {
  console.log("end:", Buffer.concat(data).toString());
});
// 비동기는 에러 처리가 필수
readStream.on("error", (err) => {
  console.error(err);
});
