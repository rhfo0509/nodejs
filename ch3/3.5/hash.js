const crypto = require("crypto");

// createHash(알고리즘) : 사용할 해시 알고리즘 (sha512 정도로 충분)
// update(문자열): 변환할 문자열
// digest(인코딩): 인코딩할 알고리즘(base64가 문자열이 가장 짧아 애용됨)
console.log(
  "base64:",
  crypto.createHash("sha512").update("bear").digest("base64")
);
console.log("hex:", crypto.createHash("sha512").update("bear").digest("hex"));
