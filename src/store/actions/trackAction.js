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
  FETCH_USER_TRACK,
  FETCH_USER_TRACK_ERROR,
  FETCH_USER_TRACK_SUCCESS,
  FETCH_ADMIN_TRACK,
  PUT_ADMIN_TRACK_SUCCESS,
  DELETE_ADMIN_TRACK_SUCCESS,
  FETCH_ADMIN_TRACK_ERROR,
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
const fetchUserRequest = () => {
  return { type: FETCH_USER_TRACK };
};
const fetchUserTrackSuccess = (tracks) => {
  return { type: FETCH_USER_TRACK_SUCCESS, tracks };
};
const fetchUserTrackError = (error) => {
  return { type: FETCH_USER_TRACK_ERROR, error };
};
const fetchAdminRequest = () => {
  return { type: FETCH_ADMIN_TRACK };
};
const putAdminTrackSuccess = (tracks) => {
  return { type: PUT_ADMIN_TRACK_SUCCESS, tracks };
};
const deleteAdminTrackSuccess = (tracks) => {
  return { type: DELETE_ADMIN_TRACK_SUCCESS, tracks };
};
const fetchAdminTrackError = (error) => {
  return { type: FETCH_ADMIN_TRACK_ERROR, error };
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

export const requestAllTracks = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get("/tracks");
      dispatch(fetchTrackSuccess(response.data));
    } catch (e) {
      dispatch(fetchTrackError(e));
    }
  };
};

export const queryTracks = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
      const response = await axios.get("/tracks?user=" + id);
      dispatch(fetchUserTrackSuccess(response.data));
    } catch (e) {
      dispatch(fetchUserTrackError(e));
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

export const deleteTrack = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchAdminRequest());
      await axios.delete("/tracks/" + id);
      const tracks = [...getState().tracks.tracks];
      const index = tracks.findIndex((track) => track.id === id);
      tracks.splice(index, 1);
      dispatch(deleteAdminTrackSuccess(tracks));
    } catch (e) {
      dispatch(fetchAdminTrackError(e));
    }
  };
};

export const putTrack = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchAdminRequest());
      const response = await axios.put("/tracks/" + id, { "published": true });
      const changedTrack = response.data;
      const tracks = [...getState().tracks.tracks];
      const index = tracks.findIndex((track) => track.id === id);
      tracks[index] = changedTrack;
      dispatch(putAdminTrackSuccess(changedTrack));
    } catch (e) {
      dispatch(fetchAdminTrackError(e));
    }
  };
};
