const mongoose = require("mongoose");
console.log(process.env.MONGODBURI);
const connectDB = () => {
  mongoose
    .connect(process.env.MONGODBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((e) => console.log("connected"))
    .catch((e) => console.log(e.message));
};

module.exports = connectDB;
