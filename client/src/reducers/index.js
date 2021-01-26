import * as CONSTANTS from "../constants/redux-constants";
import { combineReducers } from "redux";

const roomsReducer = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_ROOMS:
      return {
        rooms: action.payload,
      };
    default:
      return state;
  }
};
const selectedRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTS.ROOM_SELECTED:
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
});
