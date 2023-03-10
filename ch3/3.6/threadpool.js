const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

// 기본적으로 노드는 백그라운드에서 돌아가는 작업 (fs, crypto, zlib) 을 4개씩 나누어 수행
// cmd 상에서 SET UV_THREADPOOL_SIZE = n으로 스레드풀을 조절할 수 있다.
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("1", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("2", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("3", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("4", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("5", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("6", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("7", Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", (_, key) => {
  console.log("8", Date.now() - start);
});
