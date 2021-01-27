const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  address: String,
  location: String,
  availableFrom: Date,
  availableTill: Date,
  location: String,
  description: String,
  price: Number,
  type: String,
  avatarUrl: String,
  city: String,
  country: String,
  imageUrls: [
    {
      type: String,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  facilities: [
    {
      type: String,
    },
  ],
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
