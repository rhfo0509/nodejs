// ES module 에서 import 시 확장자 및 index 파일명 생략 불가능
import { odd, even } from './var.mjs';

function checkOddOrEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

export default checkOddOrEven;