import * as CONSTANTS from "../constants/redux-constants";
export const showDetails = (details) => {
  return {
    type: CONSTANTS.ROOM_SELECTED,
    payload: details,
  };
};
