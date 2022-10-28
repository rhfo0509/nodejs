const { URL } = require("url");

const myURL = new URL(
  "https://n.news.naver.com/article/082/0001179518?cds=news_media_pc&type=editn&type=bear"
);

// searchParams
// WHATWG 방식에서 쿼리스트링(search) 부분 처리를 도와주는 객체
console.log("searchParams:", myURL.searchParams);
console.log("searchParams.getAll():", myURL.searchParams.getAll("type"));
console.log("searchParams.get():", myURL.searchParams.get("cds"));
console.log("searchParams.has():", myURL.searchParams.has("cds"));

console.log("searchParams.keys():", myURL.searchParams.keys());
console.log("searchParams.values():", myURL.searchParams.values());

myURL.searchParams.append("filter", "es3");
myURL.searchParams.append("filter", "es5");
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.set("filter", "es6");
console.log(myURL.searchParams.getAll("filter"));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll("filter"));

console.log('searchParams.toString():', myURL.searchParams.toString())
myURL.search = myURL.searchParams.toString();