// cluster: "하나"의 포트에 "여러" 프로세스를 묶는 기능

// 기본적으로 싱글 스레드인 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈

// 코어가 8개인 서버가 있을 때
// cluster로 코어 하나당 노드 프로세스 하나를 배정 가능
// 성능이 8배가 되는 것은 아니지만 개선됨

// 단점 : 컴퓨터 자원(메모리, 세션 등) 공유 못 함
// Redis 등 별도 서버로 해결

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// 워커쓰레드의 isMainThread와 비슷
// 마스터 프로세스는 서버의 역할을 하기보다 요청을 RR 방식으로 고르게 분배하는 역할을 수행
if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커프로세스를 생성
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    console.log('code', code, 'signal', signal);
    // cluster.fork(); >> 죽은 서버를 다시 살릴 때..
  })
} else {
  // 워커 프로세스들이 포트에서 대기
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Cluster!</p>');
    setTimeout(() => {
      // 워커 존재를 확인하기 위해 1초마다 강제 종료
      process.exit(1);
    }, 1000)
  }).listen(8086);

  console.log(`${process.pid}번 워커 실행`)
}