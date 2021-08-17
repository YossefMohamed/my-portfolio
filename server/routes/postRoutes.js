const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const multer = require("multer");
const sharp = require("sharp");
const Tag = require("./../models/tages");
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
      .jpeg({ quality: 85 })
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
router.get("/pages", async (req, res) => {
  const pages = await Post.countDocuments({});
  res.status(202).json({
    status: "ok",
    pages: Math.ceil(pages / 9),
  });
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let post = await Post.findById(id);
    let prevPost = await await Post.find({ _id: { $gt: id } })
      .sort({ _id: -1 })
      .limit(1);
    let nextPost = await Post.find({ _id: { $lt: id } })
      .sort({ _id: 1 })
      .limit(1);
    if (!post) throw new Error();

    res.status(200).json({
      status: "ok",
      post: {
        ...post._doc,
        nextPost,
        prevPost,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Post Not Found",
    });
  }
});

router.get("/page/:page", async (req, res) => {
  const posts = await Post.find()
    .populate({ path: "tages" })
    .skip((req.params.page - 1) * 9)
    .limit(9);
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
  // console.log("sss");
  const { title, content, tages } = req.body;

  const post = await Post.create({
    title,
    content,
  });
  const tagesDoc = tages.map((tag) => ({
    tag,
    post: post.id,
  }));
  const postTages = await Tag.insertMany(tagesDoc);
  res.status(200).json({
    status: "ok",
    post,
    postTages,
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

router.get("/tag/:tag", async (req, res) => {
  try {
    const { tag } = req.params;
    const postsFromTages = await Tag.find({ tag: tag })
      .populate({
        path: "post",
        populate: {
          path: "tages",
        },
      })
      .select("post");
    let posts = [];
    postsFromTages.map((item) => {
      if (item.post || item.post !== null) {
        posts.push(item.post);
      }
    });
    console.log(posts);
    res.status(200).send({ status: "ok", posts });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
});
module.exports = router;
