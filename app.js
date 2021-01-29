const express = require("express");
const routes = require("./route");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

require("./db");
const app = express();

const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json

app.use(bodyParser.json());
app.use(cors());
app.use(routes);
app.use("/rooms", express.static("upload/images"));

// storage engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("rooms"), (req, res) => {
  console.log(req.file);
  res.json({
    success: 1,
    profile_url: `http://localhost:5000/rooms/${req.file.filename}`,
  });
});

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
try {
  app.listen(process.env.PORT || 5000, () => {
    console.log("server started");
  });
} catch (exp) {
  console.log(`problem in starting serve ${5000}`);
}
