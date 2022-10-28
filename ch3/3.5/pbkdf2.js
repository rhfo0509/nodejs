const crypto = require("crypto");

// crypto.randomBytes로 64바이트 문자열 생성 > salt 역할
// pbkdf2(비밀번호, salt, 반복 횟수, 출력 바이트, 알고리즘)
// 암호화하는 데 1초 정도 걸리도록 반복 횟수를 조정한다.
crypto.randomBytes(64, (err, buf) => {
  if (err) {
    console.error(err);
    return;
  }
  const salt = buf.toString("base64");
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("password:", key.toString("base64"));
  });
});
