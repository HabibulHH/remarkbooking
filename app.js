const express = require("express");
const routes = require("./route");
require("./db");
const app = express();
const cors = require("cors");

app.options("*", cors());
app.use(routes);
app.use("/rooms", express.static("upload/images"));

try {
  app.listen(process.env.PORT || 5000, () => {
    console.log("server started");
  });
} catch (exp) {
  console.log(`problem in starting serve ${5000}`);
}
