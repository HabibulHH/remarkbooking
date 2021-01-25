const RoomService = require("./service");

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
  console.log("came here");
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
};
