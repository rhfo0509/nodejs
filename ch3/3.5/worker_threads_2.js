const { Worker, isMainThread, workerData, parentPort } = require('worker_threads')

if (isMainThread) {
  const threads = new Set();
  threads.add(new Worker(__filename, {
    workerData: { start: 1 },
  }))
  threads.add(new Worker(__filename, {
    workerData: { start: 2 },
  }))
  for (let worker of threads) {
    worker.on('message', (value) => console.log('워커로부터', value))
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log('워커 끝~');
      }
    })
    worker.postMessage('ping');
  }
} else {
  // parentPort.on 대신 workerData로 데이터를 받아올 수 있음
  const data = workerData;
  console.log(data);
  parentPort.postMessage(data.start + 100);
  parentPort.close();
}