import { combineReducers } from "redux";
import roomsReducer from "./fetchReducer";
import selectedRoomReducer from "./selectedRoomsReducer";
export default combineReducers({
  rooms: roomsReducer,
  selectedRoom: selectedRoomReducer,
});
