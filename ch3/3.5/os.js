// os : 운영체제의 정보를 담고 있음
// os는 내장 모듈이라 경로 대신 이름만 적어줘도 됨
const os = require("os");

console.log("운영체제 정보ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
console.log("os.arch()", os.arch());
console.log("os.platform()", os.platform());
console.log("os.type()", os.type());
console.log("os.uptime()", os.uptime());
console.log("os.hostname()", os.hostname());
console.log("os.release()", os.release());

console.log("경로ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
console.log("os.homedir()", os.homedir());
console.log("os.tmpdir()", os.tmpdir());

console.log("cpu 정보ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
console.log("os.cpus()", os.cpus());
console.log("os.cpus().length", os.cpus().length);

console.log("메모리 정보ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
console.log("os.freemem()", os.freemem());
console.log("os.totalmem()", os.totalmem());
