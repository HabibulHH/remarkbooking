import * as CONSTANTS from "../constants/redux-constants";
import { combineReducers } from "redux";
const roomsReducer = () => {
  return [
    { title: "Green villa", rating: 2323 },
    { title: "Sea view", rating: 2323 },
    { title: "Sky view shajek", rating: 2323 },
  ];
};

const selectedRoomReducer = (selected = null, action) => {
  if (action.type === CONSTANTS.ROOM_SELECTED) {
    return action.paylaod;
  }
  return selected;
};

export default combineReducers({
  rooms: roomsReducer,
  selectedRoom: selectedRoomReducer,
});
