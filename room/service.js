const { Model } = require("mongoose");
const Room = require("./model");
exports.getRooms = function (query, page, limit) {
  try {
    let rooms = Room.find(query);
    return rooms;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Paginating Users");
  }
};

exports.saveRoom = async function (data) {
  try {
    let doc = new Room(data.body);
    // Room.deleteMany({}, function (err) {
    //   if (err) console.log(err);
    //   console.log("Successful deletion");
    // });
    doc.save((err, doc) => {
      if (err) console.log(err);
      else {
        console.log(doc);
      }
    });
    return doc;
  } catch (e) {
    throw Error(e);
  }
};

exports.deleteAll = async function (data) {
  try {
    Room.deleteMany({}, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });
  } catch (e) {
    throw Error(e);
  }
};
