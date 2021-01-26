const express = require("express");
const router = express.Router();

const RoomController = require("../room/controller");

router.get("/rooms", RoomController.getRooms);
router.post("/save", RoomController.saveRoom);
router.post("/image", RoomController.saveImage);

module.exports = router;
