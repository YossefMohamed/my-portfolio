const mongoose = require("mongoose");

const tagesSchema = new mongoose.Schema({
  tag: { type: String, required: true, lowercase: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
});
tagesSchema.pre("save", function (next) {
  this.brief = this.content.slice(0, 170);
  next();
});
module.exports = mongoose.model("Tag", tagesSchema);
