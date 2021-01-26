const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./route");
const multer = require("multer");
const path = require("path");
require("./db");
const app = express();
const cors = require("cors");

app.options("*", cors());
app.use(routes);
app.use("/rooms", express.static("upload/images"));

try {
  app.listen(process.env.PORT || 8081, () => {
    console.log("server started");
  });
} catch (exp) {
  console.log(`problem in starting serve ${8081}`);
}
