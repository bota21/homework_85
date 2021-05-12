import axios from "../../axios/axiosURL";
import { push } from "connected-react-router";
import {
  FETCH_ARTIST_SUCCESS,
  FETCH_REQUEST,
  FETCH_ARTIST_ERROR,
  POST_ARTIST,
  POST_ARTIST_SUCCESS,
  POST_ARTIST_ERROR,
} from "../actionTypes";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchArtistSuccess = (artists) => {
  return { type: FETCH_ARTIST_SUCCESS, artists };
};
const fetchArtistError = (error) => {
  return { type: FETCH_ARTIST_ERROR };
};
const postArtist = () => {
  return { type: POST_ARTIST };
};
const postArtistSuccess = () => {
  return { type: POST_ARTIST_SUCCESS };
};
const postArtistError = (error) => {
  return { type: POST_ARTIST_ERROR, error };
};

export const requestArtists = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get("/artists");
      dispatch(fetchArtistSuccess(response.data));
    } catch (e) {
      dispatch(fetchArtistError(e));
    }
  };
};

export const createArtist = (artist) => {
  return async (dispatch) => {
    try {
      dispatch(postArtist());
      await axios.post("/artists", artist);
      dispatch(postArtistSuccess());
      dispatch(push("/artists"));
    } catch (e) {
      const message = "Album not created"
      dispatch(postArtistError(message));
    }
  };
};
