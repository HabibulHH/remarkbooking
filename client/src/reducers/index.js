import * as CONSTANTS from "../constants/redux-constants";
import { combineReducers } from "redux";
const roomsReducer = () => {
  return [
    { title: "Green villa", rating: 2323 },
    { title: "Sea view", rating: 2323 },
    { title: "Sky view shajek", rating: 2323 },
  ];
};

const selectedRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case "ROOM_SELECTED":
      return {
        ...state,
        selectedRoom: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  rooms: roomsReducer,
  selectedRoom: selectedRoomReducer,
});
