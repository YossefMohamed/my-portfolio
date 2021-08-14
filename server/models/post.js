const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    views: {
      type: Number,
      default: 0,
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
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: { virtuals: true },
  }
);
postSchema.virtual("tages", {
  ref: "Tag",
  foreignField: "post",
  localField: "_id",
});
postSchema.pre("save", function (next) {
  this.brief = this.content.slice(0, 170);
  next();
});
module.exports = mongoose.model("Post", postSchema);
