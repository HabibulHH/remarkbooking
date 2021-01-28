const util = require("util");
const path = require("path");
const multer = require("multer");
console.log("i am here.........");
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, callback) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      var message = `${file.originalname} is invalid. Only accept png/jpeg.`;
      return callback(message, null);
    }

    let filename = `${file.fieldname}${Date.now()}${path.extname(
      file.originalname
    )}`;
    callback(null, filename);
  },
});

var uploadFiles = multer({ storage: storage }).array("rooms", 4);
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
