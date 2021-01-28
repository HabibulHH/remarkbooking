const express = require("express");
const router = express.Router();

const RoomController = require("../room/controller");

router.get("/rooms", RoomController.getRooms);
router.post("/save", RoomController.saveRoom);
router.get("/delete_all", RoomController.deleteAll);

module.exports = router;
