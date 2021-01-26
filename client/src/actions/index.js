import * as CONSTANTS from "../constants/redux-constants";
import getRooms from "../apis/getRooms";
const axios = require("axios");

export const showDetails = (details) => {
  return {
    type: CONSTANTS.ROOM_SELECTED,
    payload: details,
  };
};

export const fetchRooms = () => {
  let url = `http://localhost:8081`;
  return async (dispatch) => {
    const response = await axios.get("/rooms");
    dispatch({
      type: CONSTANTS.FETCH_ROOMS,
      payload: response.data.data,
    });
  };
};
