const odd = "홀수입니다";
const even = "짝수입니다";

module.exports = {
  odd,
  even,
};



// exports ===>(참조) module.exports ===>(참조) {}

// exports를 쓰던지, module.exports를 쓰던지 둘 중 하나만 해야 된다.

// 만약
// exports.odd = odd;
// exports.ecen = even;
// 을 한 후

// module.exports = {}
// 를 하면
// 둘 사이의 참조 관계가 깨져 버린다.

// module.exports 에 객체 대신 함수가 들어가도
// 둘 사이의 참조 관계가 깨져 버린다.