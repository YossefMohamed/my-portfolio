const express = require("express");
const router = express.Router();

const Tag = require("../models/tages");

router.get("/", async (req, res) => {
  try {
    const tages = await Tag.find().distinct("tag");
    res.status(200).json({
      status: "ok",
      tages,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
});
module.exports = router;
