const http = require("http");

// 서버를 만드는 것도 비동기 (에러 처리가 필요함)
// 코드 수정 시 서버를 껐다가 다시 켜야함
const server = http
  .createServer((req, res) => {
    // html 형식의 데이터를 전송하고 있음을 서버에게 response header를 통해 알림
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // write : stream 방식으로 data 작성
    res.write("<h1>Hello Node!</h1>");
    res.write("<p>Hello Server!</p>");
    res.end("<p>Hello Client!</p>");
  })
  // localhost:8080
  // 다른 포트를 사용하여 db나 다른 서버 동시에 연결 가능
  .listen(8080);

// listening: 리스너 콜백 분리 가능
server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다.");
});
server.on("error", (error) => {
  console.error(error);
});
