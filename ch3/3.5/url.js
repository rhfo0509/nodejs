const url = require("url");

// WHATWG의 url
// url 모듈 내에 있는 URL 생성자에 주소를 넣어 객체로 만듦
// WHATWG에만 있는 username, password, origin, searchParams 속성이 존재
const { URL } = url;
const myURL = new URL(
  "https://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL():", myURL);
console.log("url.format()", url.format(myURL));
console.log("------------------------------");

// 기존 node의 url
// 주소 앞이 생략된 경우 (ex) /login > 기존 node url을 사용
const parsedUrl = url.parse(
  "https://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("url.parse():", parsedUrl);
console.log("url.format():", url.format(parsedUrl));
