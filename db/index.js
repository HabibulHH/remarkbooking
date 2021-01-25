const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/rentals", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("connected.......");
  })
  .catch((err) => {
    console.log(err);
  });
