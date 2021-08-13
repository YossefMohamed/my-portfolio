const express = require("express");
const app = express();
var morgan = require("morgan");

const bodyParser = require("body-parser");
const connectDB = require("./db/mongoose");
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static("public"));

require("dotenv").config({ path: "./.env" });
connectDB();
const postRoutes = require("./routes/postRoutes");

app.use("/api/post", postRoutes);
app.listen(4000, function () {
  console.log("App is running on " + 4000);
});
