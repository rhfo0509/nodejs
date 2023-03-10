// 1. 클라이언트로부터 받은 요청에 쿠키와 함께 응답

// 2. 이후 클라이언트가 쿠키와 함께 요청하면 서버가 쿠키를 읽어 누구인지 파악

// Set-Cookie: 브라우저에게 쿠키를 설정하라고 명령

// req.headers.cookie를 통해 서버가 쿠키를 읽을 수 있음

// 쿠키는 키와 값의 쌍, "키=값"으로 표현
const http = require("http");

http
  .createServer((req, res) => {
    // 최초 요청 시에는 req.headers.cookie에 값이 들어있지 않음
    // Set-Cookie를 통해 클라이언트가 쿠키를 받아들여 이후 요청할 때 request header에 cookie를 담아 전달한다.
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
  });
