const express = require("express");
const path = require("path");

// 익스프레스 서버
// 알아서 에러 처리를 해줌
// 404 - 해당 경로 존재x, 500 - 서버 쪽에서 발생한 에러

// app -> app.set -> app.use(공통) -> router -> 404 처리 m.w -> 에러 처리 m.w

const app = express();

// *app.set 으로 설정한 속성은
app.set("port", process.env.PORT || 3000);

// middleware의 형식: (req, res, next) => { ... }

// 모든 요청에 대해 실행할 작업을 app.use의 callback에 넣는다.
// 세 번째 매개변수에 next를 넣어 실행시켜줘야만, 다음 라우터 중 경로가 일치하는 것을 실행한다.
app.use(
  // 미들웨어를 여러 개 넣어도 됨 (순차적으로 실행)
  (req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요[1]");
    // next에 인수가 없을 때: 다음 미들웨어 실행
    next();
  },
  (req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요[2]");
    next();
  },
  (req, res, next) => {
    console.log("모든 요청에 실행하고 싶어요[3]");
    next();
  },
  // (req, res, next) => {
  //   try {
  //     throw new Error("에러 생김 ㄹㅇㅋㅋ");
  //   } catch (error) {
  //     // next에 인수가 들어간다면: 에러로 인식, 에러 처리 미들웨어 실행
  //     next(error);
  //   }
  // }
);

// get과 post 둘 중 하나만 실행됨
app.get(
  "/",
  (req, res, next) => {
    console.log("get 요청이 실행되었어요 - index");
    res.sendFile(path.join(__dirname, "index.html")); // 웹 서버에서 주로 사용

    // // sendFile/send/json이 두 번 이상 나오면 아래 에러 발생
    // // Cannot set headers after they are sent to the client

    // // 이미 응답을 보냈는데 그 이후에 writeHead를 작성하면 에러 발생
    // // 참고로 res.send가 res.writeHead(200, {'Content-Type' : 'text/plain' }) + res.end 이다.

    // // res.writeHead(200, { 'Content-Type': 'application/json' })
    // // res.end(JSON.stringify({ hello: 'zerocho' })) 와 같음
    // res.json({ hello: 'zerocho' })  // API 서버에서 주로 사용

    // if문 > next 분기처리
    if (true) {
      // 다음 "미들웨어"가 실행되지 않고 다음 "라우터"가 실행됨
      next('route');
    } else {
      next();
    }
  },
  (req, res) => {
    // if문의 next()에 의해 실행됨
    console.log("실행되나요?");
  }
);

app.get("/", (req, res) => {
  // if문의 next("route")에 의해 실행됨
  console.log("실행되지롱"); // 웹 서버에서 주로 사용
});

app.post("/", (req, res) => {
  console.log("post 요청이 실행되었어요 - index");
  res.send("hello express");
});

app.get("/about", (req, res) => {
  console.log("get 요청이 실행되었어요 - about");
  res.send("hello express");
});

// route parameter
// req.params.name으로 :name에 들어있는 값을 얻어낼 수 있다.
app.get("/category/:name", (req, res) => {
  res.send(`hello ${req.params.name}`);
  console.log('res.send 다음에 나오는 console.log도 실행됨');
});

// 참고: res.send를 하면 다음 미들웨어로 넘어가지 않는 것이 원칙
// 위에서부터 아래로 실행되는 특성 때문에 실행되지 않음
app.get("/category/JavaScript", (req, res) => {
  res.send("이 부분은 실행되지 않습니다.");
});

// 따라서 route parameter를 맨 아래에 적는 것이 좋음
app.get("*", (req, res) => {
  res.send("모든 요청에 대해 실행됩니다.");
});

// 404 처리 미들웨어
app.use((req, res, next) => {
  res.status(404).send("해당되는 주소를 찾을 수 없음 ㄹㅇㅋㅋ");
});

// 에러 처리 미들웨어 (반드시 4개의 매개변수 모두 다 써야함)
app.use((err, req, res, next) => {
  console.error(err);
  // 에러가 나도 status code 200 으로 되어있음
  // 서버에 500 에러 있어도 브라우저는 모르도록.. (해커가 알 수 없도록)
  res.send("에러났는데 서버만 알고 있을거임 ㄹㅇㅋㅋ");
});

// *어디에서든지 app.get으로 속성의 값을 가져올 수 있음
app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
