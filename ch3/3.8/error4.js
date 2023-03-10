// 최후의 수단
// but 콜백 함수의 동작이 보장되지 않으므로
// 복구 작업용 대신 에러 내용 기록 용으로 쓰는게 좋음

process.on('uncaughtException', (err) => {
  console.error('예기치 못한 에러', err)
})

setInterval(() => {
  throw new Error('서버를 고장내주마!')
}, 1000);

setTimeout(() => {
  console.log('실행됩니다.')
}, 2000)