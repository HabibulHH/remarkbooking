import * as CONSTANTS from "../constants/redux-constants";
export default (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_ROOMS: {
      return action.payload;
    }
    case CONSTANTS.SEARCH_ROOMS: {
      return action.payload;
    }
    default:
      return state;
  }
};
