// 일정한 크기가 되면 한 번에 처리
// 버퍼링: 버퍼에 데이터가 찰 때까지 모으는 작업

const buffer = Buffer.from("저를 버퍼로 바꿔보세요");
console.log(buffer);
console.log(buffer.length); // 32byte
console.log(buffer.toString());

const array = [
  Buffer.from("띄엄 "),
  Buffer.from("띄엄 "),
  Buffer.from("띄어쓰기"),
];
console.log(Buffer.concat(array).toString());


// 빈 버퍼
console.log(Buffer.alloc(5))