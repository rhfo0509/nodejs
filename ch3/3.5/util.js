const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!");

dontUseMe(1, 2);

// util.promisify 로 callback function을 감싸주면
// 프로미스가 되어 .then/.catch가 사용가능해지며, async/await 패턴까지 사용가능
// 이때 콜백이 (err, data) => { } 형식이여야 한다.
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((err) => {
    console.error(err);
  });
