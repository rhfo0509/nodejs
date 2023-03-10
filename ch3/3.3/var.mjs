// .mjs : commonJS 대신 ES 모듈 사용 가능 (export, import 키워드)

// named export: import 시 as 키워드를 통해 다른 이름 지정 가능
export const odd = "홀수입니다";
export const even = "짝수입니다";


// exports ===>(참조) module.exports ===>(참조) {}

// exports를 쓰던지, module.exports를 쓰던지 둘 중 하나만 해야 된다.

// 만약
// exports.odd = odd;
// exports.even = even;
// 을 한 후

// module.exports = {}
// 를 하면
// 둘 사이의 참조 관계가 깨져 버린다.

// module.exports 에 객체 대신 함수가 들어가도
// 둘 사이의 참조 관계가 깨져 버린다.