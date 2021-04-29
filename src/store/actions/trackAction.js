import axios from "../../axios/axiosURL";

import {
  FETCH_REQUEST,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_ERROR,
} from "../actionTypes";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchTrackSuccess = (tracks) => {
  return { type: FETCH_TRACK_SUCCESS, tracks };
};
const fetchTrackError = (error) => {
  return { type: FETCH_TRACK_ERROR, error };
};

export const requestTracks = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get("/tracks?album=" + id);
      dispatch(fetchTrackSuccess(response.data));
    } catch (e) {
      dispatch(fetchTrackError(e));
    }
  };
};
