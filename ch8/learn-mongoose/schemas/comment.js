const mongoose = require("mongoose");

const { Schema } = mongoose;
// mongoose.Schema.Types.ObjectId
const {
  Types: { ObjectId },
} = Schema;

const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    // sequelize의 include와 같은 기능 수행
    // ref: 'User'를 통해 commenter 필드의 값은 User 컬렉션의 ObjectId가 됨
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
