const mongoose = require("mongoose");

// nodejs와 mongodb를 연결하는 connect 함수
const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    // 개발 모드일 때 콘솔에 쿼리문이 뜨도록
    mongoose.set("debug", true);
  }
  mongoose.connect(
    "mongodb://root:dmdtj123^^@localhost:27017/admin",
    {
      dbName: "nodejs",
      useNewUrlParser: true,
    },
    (error) => {
      if (error) {
        console.log("몽고디비 연결 에러", error);
      } else {
        console.log("몽고디비 연결 성공");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("몽고디비 연결 에러", error);
});
mongoose.connection.on("disconnected", () => {
  console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.");
  connect();
});

module.exports = connect;
