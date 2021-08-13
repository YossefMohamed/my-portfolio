const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const multer = require("multer");
const sharp = require("sharp");
const upload = multer({
  fileFilter: (req, file, cd) => {
    if (file.mimetype.startsWith("image")) {
      cd(null, true);
    } else {
      cd("Upload A Image !!");
    }
  },
});
router.post("/upload/:post", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) res.status(400).send("PLease upload an image !!");
    req.file.filename = `post-${req.params.post}.jpeg`;
    console.log(req.params);
    sharp(req.file.buffer)
      .resize(600, 400)
      .toFormat("jpeg")
      .jpeg({ quality: 60 })
      .toFile(`public/images/${req.file.filename}`);
    const post = await Post.findById(req.params.post);
    post.coverImage = req.file.filename;
    await post.save();
    res.status(200).json({
      status: "ok",
      post,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post)
    res.status(404).json({
      status: "failed",
      message: "Post Not Found",
    });

  res.status(200).json({
    status: "ok",
    post,
  });
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    status: "ok",
    posts,
  });
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndDelete(id);
  if (!post)
    res.status(404).json({
      status: "failed",
      message: "post not found",
    });
  res.status(200).json({
    status: "ok",
    post,
  });
});

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  if (!title)
    res.status(404).json({
      status: "404",
      message: "title not found",
    });

  const post = await Post.create({
    title,
    content,
  });
  res.status(200).json({
    status: "ok",
    post,
  });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!post) {
    res.status(404).json({
      status: "failed",
      message: "Post not found",
    });

    res.status(202).json({
      status: "ok",
      post,
    });
  }
});

module.exports = router;
