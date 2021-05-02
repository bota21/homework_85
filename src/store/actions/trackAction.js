import axios from "../../axios/axiosURL";

import {
  FETCH_REQUEST,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_ERROR,
  POST_TRACK_HISTORY_ERROR,
  FETCH_TRACK_HISTORY_ERROR,
  FETCH_TRACK_HISTORY_SUCCESS,
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
const postTrackHistoryError = (error) => {
  return { type: POST_TRACK_HISTORY_ERROR, error };
};
const fetchTrackHistorySuccess = (history) => {
  return { type: FETCH_TRACK_HISTORY_SUCCESS, history };
};
const fetchTrackHistoryError = (error) => {
  return { type: FETCH_TRACK_HISTORY_ERROR, error };
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

export const addTrackHistory = (history) => {
  return async (dispatch) => {
    try {
      await axios.post("/track_history", history);
    } catch (e) {
      dispatch(postTrackHistoryError(e));
    }
  };
};

export const showHistory = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/track_history");
      dispatch(fetchTrackHistorySuccess(response.data));
    } catch (e) {
      dispatch(fetchTrackHistoryError(e));
    }
  };
};
