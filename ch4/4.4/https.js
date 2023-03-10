const https = require("https");
const fs = require("fs");

// 인증서를 인증기관에서 얻어오는 절차 필요
// 승인 시, cert/key/ca가 들어있는 파일을 인증기관에서 제공
// fs.readFileSync를 통해 파일을 불러옴
https
  .createServer(
    {
      cert: fs.readFileSync("도메인 인증서 경로"),
      key: fs.readFileSync("도메인 비밀키 경로"),
      ca: [
        fs.readFileSync("상위 인증서 경로"),
        fs.readFileSync("상위 인증서 경로"),
      ],
    },
    (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello Server!</p>");
    }
  )
  // https인 경우 443이어야만 포트 생략 가능
  .listen(443, () => {
    console.log("443번 포트에서 서버 대기 중입니다!");
  });
