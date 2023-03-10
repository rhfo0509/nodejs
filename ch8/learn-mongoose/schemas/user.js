// MySQL의 테이블처럼 필드 속성을 재정의해줘야 함
// type: 자료형, required: 필수 여부, default: 기본값, unique: 고유 여부

const mongoose = require("mongoose");

// schema: 해당 컬렉션의 문서에 어떤 종류의 값이 들어가는지를 정의
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  // 옵션이 type밖에 없는 경우, 객체 형태 생략 가능 (required는 false)
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// model: schema를 통해서 만드는 인스턴스로, 이 객체를 통하여 db에 실제 작업 수행이 가능해짐
module.exports = mongoose.model("User", userSchema);
