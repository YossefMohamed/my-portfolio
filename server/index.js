const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
var morgan = require("morgan");
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const connectDB = require("./db/mongoose");
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("public"));
const path = require("path");
connectDB();
const postRoutes = require("./routes/postRoutes");
const tagesRoutes = require("./routes/tagRoutes");
app.use("/resume", (req, res) => {
  const file = __dirname + "/public/Resume-Yossef-Mohamed.pdf";
  res.download(file);
});
app.use("/api/post", postRoutes);
app.use("/api/tag", tagesRoutes);
app.listen(4000, function () {
  console.log("App is running on " + 4000);
});
