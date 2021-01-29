const RoomService = require("./service");
const multer = require("multer");
const upload = require("./uploadImage");
const path = require("path");

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

exports.searrchRooms = async function (req, res, next) {
  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;
  console.log(req.query, "..........");

  try {
    const users = await RoomService.getRooms({
      city: req.city,
      availableTill: {
        $gte: new Date(new Date(req.query.availableFrom).setHours(00, 00, 00)),
        $lt: new Date(new Date(req.query.availableTill).setHours(23, 59, 59)),
      },
      page,
      limit,
    });
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
  console.log(req.body, "This is muy body");
  if (req.body) {
    try {
      const room = await RoomService.saveRoom(req);
      return res.status(200).json({
        status: 200,
        data: room,
        message: "Succesfully Users Retrieved",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  } else {
    return res.status(401).json({
      status: 401,
      message: "Can not save",
    });
  }
};

exports.saveImage = async function (req, res, next) {
  console.log(req);
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
    let result = await upload(req.body, res);
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

exports.deleteAll = async function (req, res, next) {
  try {
    const users = await RoomService.deleteAll();
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Deleted",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
