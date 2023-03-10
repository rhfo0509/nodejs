const fs = require('fs');

// sync: 콜백을 안써도 되서 코드가 더 간결해짐
// 순서가 보장됨
// 사람이 이해하기는 좋지만 프로그래밍상으로는 비효율적
// 서버 초기화 작업을 하는 경우 사용 가능, 서버가 실행된 이유에는 X
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());