import * as CONSTANTS from "../constants/redux-constants";
export default (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.ROOM_SELECTED:
      return [...state, action.payload];

    default:
      return state;
  }
};
