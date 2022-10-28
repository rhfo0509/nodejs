const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readmeStream.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./writemePipe.txt.gz');

// pipe: 16바이트씩 읽고 받아들임 (파일 복사와 유사)
// zlib.createGzip()을 통해 chunk 압축 가능
readStream.pipe(zlibStream).pipe(writeStream);