const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./route");

require("./db");
const app = express();

app.use(routes);

app.use("/rooms", express.static("upload/images"));
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: storage,
});

app.get("/", (request, response) => {
  response.status(200).send({ success: "ok.." });
});

app.post("/saveimage", upload.single("rooms"), (request, response) => {
  const { query, params, body, file } = request;
  //console.log(query, params, body, file);
  response.status(200).json({
    success: 1,
    profile_url: `http://localhost:8081/rooms/${request.file.filename}`,
  });
});

try {
  app.listen(process.env.PORT || 8081, () => {
    console.log("server started");
  });
} catch (exp) {
  console.log(`problem in starting serve ${8081}`);
}
