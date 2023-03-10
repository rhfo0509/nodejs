// dotenv는 최대한 상위에 위치
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const fs = require("fs");

const app = express();

app.set("port", process.env.PORT || 3000);

// morgan: 서버로 들어온 요청과 응답을 기록해주는 미들웨어
// 개발환경에서는 dev, 배포환경에서는 combined
app.use(morgan("dev"));

// app.use(요청 경로, express.static(실제 경로)): 정적 파일 제공
// 요청 경로: localhost:3030/index.html <--------------> 실제 경로: C:/Users/user/Desktop/nodejs/ch6/6.2/public-3030/index.html (서버의 구조를 파악하지 못해 보안에 도움)
// express.static의 경우, 파일을 찾은 경우 내부적으로 next()를 실행 안하고 바로 끝내버린다.
app.use("/", express.static(path.join(__dirname, "public-3030")));

// cookieParser: 요청 헤더의 쿠키를 parsing하는 미들웨어
// 자동으로 req.cookies에 쿠키를 할당함, parseCookies 함수와 기능 비슷
// 비밀 키로 쿠키 뒤에 서명을 붙여 내 서버가 만든 쿠키임을 검증할 수 있음 -> req.signedCookies로 접근 가능
// 소스코드 대신 .env에 비밀 키 값을 저장함으로써 보안 강화
app.use(cookieParser(process.env.COOKIE_SECRET));

//
app.use(
  session({
    // resave: 요청이 왔을 때 세션에 수정사항이 생기지 않아도 다시 저장할지 여부
    resave: false,
    // saveUninitialized: 세션에 저장할 내역이 없더라도 세션을 저장할지 여부
    saveUninitialized: false,
    // secret: 쿠키 서명
    secret: process.env.COOKIE_SECRET,
    // cookie: 세션 쿠키 옵션
    cookie: {
      httpOnly: true,
    },
  })
);

// bodyParser 대신 사용

// express.json(): 클라이언트에서 AJAX 요청을 보낼 때, 알아서 파싱되어 req.body에 할당
// 클라이언트에서 name을 보내면 req.body.name으로 그 값에 접근할 수 있음
app.use(express.json());
// express.urlencoded(): 클라이언트에서 form 요청을 보낼 때, 이를 해석해 req.body에 할당
// true 를 하면 qs 모듈을 사용하고, false 면 query-string 모듈을 사용
app.use(express.urlencoded({ extended: true }));

// req나 res 객체 안에 값을 넣어 데이터 전달 가능 (요청 하나 동안만 유지)
// req.session 객체에 값을 넣어서 데이터 전달도 가능 (다음 요청 시에도 데이터가 남아있음)
app.use(
  (req, res, next) => {
    req.data = "전달할 데이터";
    next();
  },
  (req, res, next) => {
    console.log(req.data);
    next();
  }
);

// // 미들웨어 확장
// // 내가 만든 미들웨어에 기존의 미들웨어를 넣고 싶은 경우
// app.use("/", (req, res, next) => {
//   // 로그인이 되어 있으면 사진, 파일 등의 데이터를 프론트에 전달
//   // 아니라면 다음 미들웨어로 넘어감
//   if (req.session.id) {
//     express.static(__dirname, "public")(req, res, next);
//   } else {
//     next();
//   }
// })

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "multipart.html"));
});
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);  // upload.single
  res.send("ok");
});
// app.post("/upload", upload.none(), (req, res) => {
//   console.log(req.body);  // 공통
//   res.send("ok");
// });
// app.post("/upload", upload.array("image"), (req, res) => {
//   console.log(req.files);
//   res.send("ok");
// });

// app.post("/upload", upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]), (req, res) => {
//   console.log(req.files.image1, req.files.image2, req.files.image3);
//   res.send('ok');
// })


app.get("/", (req, res, next) => {
  req.session.name = "zerocho"; // 세션 등록
  console.log(req.sessionID); // 세션 아이디 확인
  // req.session.destroy();        // 세션 모두 제거

  // "Set-Cookie": `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
  res.cookie("name", "zerocho", {
    expires: new Date(Date.now() + 60000),
    httpOnly: true,
    path: "/",
  });

  // clearCookie 사용 시 expires와 maxAge를 제외한 옵션들이 일치해야 함
  res.clearCookie("name", "zerocho", {
    httpOnly: true,
    path: "/",
  });
  res.sendFile(path.join(__dirname, "index.html"));
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
});

// 참고: res.send를 하면 다음 미들웨어로 넘어가지 않는 것이 원칙
// 위에서부터 아래로 실행되는 특성 때문에 실행되지 않음
app.get("/category/JavaScript", (req, res) => {
  res.send("이 부분은 실행되지 않습니다.");
});

// // 따라서 route parameter를 맨 아래에 적는 것이 좋음
// app.get("*", (req, res) => {
//   res.send("모든 요청에 대해 실행됩니다.");
// });

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
