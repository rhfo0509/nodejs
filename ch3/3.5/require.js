console.log("require가 가장 위에 오지 않아도 됩니다.");

module.exports = "저를 찾아보세요.";

require("../3.3/var");

console.log("require.cache입니다.");
console.log(require.cache);
console.log("require.main입니다.");
console.log(require.main);
console.log(require.main === module);
console.log(require.main.filename);

// require가 제일 위에 올 필요는 없음
// require.cache: 한 번 require한 모듈에 대한 캐싱 정보
// require.main: 노드 실행 시 첫 모듈
