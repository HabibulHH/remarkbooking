import * as CONSTANTS from "../constants/redux-constants";
const axios = require("axios");

export const showDetails = (details) => {
  return {
    type: CONSTANTS.ROOM_SELECTED,
    payload: details,
  };
};

export const fetchRooms = () => {
  let url = `http://localhost:5000`;
  return async (dispatch) => {
    const response = await axios.get("/rooms");
    dispatch({
      type: CONSTANTS.FETCH_ROOMS,
      payload: response.data.data,
    });
  };
};

export const searchRooms = (configs) => {
  let url = `http://localhost:5000`;
  return async (dispatch) => {
    const response = await axios.get("/filter_rooms", {
      params: configs,
    });
    dispatch({
      type: CONSTANTS.SEARCH_ROOMS,
      payload: response.data.data,
    });
  };
};
