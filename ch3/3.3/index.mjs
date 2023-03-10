import { odd, even } from "./var.mjs";
// default export: import 시 기본적으로 다른 이름 지정 가능
import checkNumber from "./func.mjs";

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
