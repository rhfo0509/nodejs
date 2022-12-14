// const fs = require("fs");

// fs.readFile("./readme.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data); 
//   console.log(data.toString());
// });


// fs에서 프로미스를 지원한다.
const fs = require("fs").promises;

fs.readFile("./readme.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });