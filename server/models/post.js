const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    default: "default.jpeg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  brief: {
    type: String,
  },
});
postSchema.pre("save", function (next) {
  this.brief = this.content.slice(0, 170);
  next();
});
module.exports = mongoose.model("Post", postSchema);
