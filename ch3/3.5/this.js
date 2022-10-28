// 전역 스코프의 this는 빈 객체(module.exports와 동일)
console.log(this);
console.log(this === module.exports);

// 함수 선언문 내의 this는 global과 동일
function a() {
  console.log(this === global);
}
a();