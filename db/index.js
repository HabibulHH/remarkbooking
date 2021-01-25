const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/rentals", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
