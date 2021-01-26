const RoomService = require("./service");
const multer = require("multer");
const upload = require("./uploadImage");
const path = require("path");
const { request } = require("http");
const { url } = require("inspector");
exports.getRooms = async function (req, res, next) {
  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;
  try {
    const users = await RoomService.getRooms({}, page, limit);
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully  Rooms list created",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.saveRoom = async function (req, res, next) {
  console.log("came here", req.file);
  try {
    // await upload(req, res);
    console.log(req.files);

    const room = await RoomService.saveRoom(req);
    return res.status(200).json({
      status: 200,
      data: room,
      message: "Succesfully Users Retrieved",
      files: req.files.map((item) => item.filename),
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.saveImage = async function (req, res, next) {
  try {
    let urls = await multipleUpload(req, res);
    return res.status(200).json({
      status: 200,
      message: "Image uploaded",
      urls: urls,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
const multipleUpload = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }

    let urls = [];
    urls = req.files.map((item) => {
      console.log(item);
      return `http://localhost:8081/rooms/${item.filename}`;
    });
    return urls;
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};
