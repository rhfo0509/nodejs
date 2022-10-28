setInterval(() => {
  console.log("시작");
  try {
    // 에러가 발생할 만한 곳을 try catch로 감쌈
    throw new Error("서버를 고장내주마!");
  } catch (err) {
    // throw로 던져진 에러는 catch에서 받는다.
    // 마치가 에러가 없었던 것처럼 콘솔에 반복되어 출력됨
    console.error(err);
  }
}, 1000);
