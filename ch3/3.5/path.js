// path: 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
// 경로 구분자 > windows: '\', POSIX: '/'
const path = require("path");

// path.join: 절대 경로를 무시한다.
console.log(path.join(__dirname, "..", "/var.js"));

// path.resolve: 절대 경로를 존중한다. (앞의 경로 무시)
console.log(path.resolve(__dirname, "..", "/var.js"));

const string = __filename;

console.log("path.sep:", path.sep);
console.log("path.delimiter:", path.delimiter);
console.log("-------------------------------");
console.log("path.dirname():", path.dirname(string));
console.log("path.extname():", path.extname(string));
console.log("path.basename():", path.basename(string));
console.log(
  "path.basename - extname:",
  path.basename(string, path.extname(string))
);
console.log("-------------------------------");
console.log("path.parse()", path.parse(string));
console.log(
  "path.format():",
  path.format({
    dir: "c:\\users\\zerocho",
    name: "path",
    ext: ".js",
  })
);
console.log(
  "path.normalize():",
  path.normalize("c://users\\\\zerocho\\path.js")
);
console.log("-------------------------------");
console.log("path.isAbsolute(c:\\):", path.isAbsolute("c:\\"));
console.log("path.isAbsolute(./home):", path.isAbsolute("./home"));
console.log("-------------------------------");
console.log(
  "path.relative():",
  path.relative("c:\\Users\\user\\Desktop\\nodejs\\ch3\\3.6\\path.js", "c:\\")
);
