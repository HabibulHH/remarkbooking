const express = require("express");
var bodyParser = require("body-parser");
require("./db");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", (request, response, next) => {
  response.status(200).send({ success: "ok.." });
});

try {
  app.listen(process.env.PORT || 8081, () => {
    console.log("server started");
  });
} catch (exp) {
  console.log(`problem in starting serve ${8081}`);
}
