const fs = require("fs");

console.log("before:", process.memoryUsage().rss);

const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./bigStream.txt");
readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("stream:", process.memoryUsage().rss);
});
