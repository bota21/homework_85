import axios from "../../axios/axiosURL";
import { push } from "connected-react-router";
import {
  FETCH_REQUEST,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_ERROR,
  POST_TRACK_HISTORY_ERROR,
  FETCH_TRACK_HISTORY_ERROR,
  FETCH_TRACK_HISTORY_SUCCESS,
  POST_TRACK,
  POST_TRACK_SUCCESS,
  POST_TRACK_ERROR,
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
const postTrack = () => {
  return { type: POST_TRACK };
};
const postTrackSuccess = () => {
  return { type: POST_TRACK_SUCCESS };
};
const postTrackError = (error) => {
  return { type: POST_TRACK_ERROR, error };
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

export const createTrack = (track) => {
  return async (dispatch) => {
    try {
      dispatch(postTrack());
      await axios.post("/tracks", track);
      dispatch(postTrackSuccess());
      dispatch(push("/artists"));
    } catch (e) {
      const message = "Track not created";
      dispatch(postTrackError(message));
    }
  };
};
