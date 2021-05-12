import {
  FETCH_ALBUM_SUCCESS,
  FETCH_REQUEST,
  FETCH_ALBUM_ERROR,
  POST_ALBUM,
  POST_ALBUM_SUCCESS,
  POST_ALBUM_ERROR,
  STOP_LOADING,
} from "../actionTypes";
import axios from "../../axios/axiosURL";
import { push } from "connected-react-router";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};

const fetchAlbumSuccess = (albums) => {
  return { type: FETCH_ALBUM_SUCCESS, albums };
};

const fetchAlbumError = (error) => {
  return { type: FETCH_ALBUM_ERROR, error };
};
const postAlbum = () => {
  return { type: POST_ALBUM };
};
const postAlbumSuccess = () => {
  return { type: POST_ALBUM_SUCCESS };
};
const postAlbumError = (error) => {
  return { type: POST_ALBUM_ERROR, error };
};

export const fetchAlbums = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get("/albums?artist=" + id);
      dispatch(fetchAlbumSuccess(response.data));
    } catch (e) {
      dispatch(fetchAlbumError(e));
    }
  };
};

export const createAlbum = (album) => {
  return async (dispatch) => {
    try {
      dispatch(postAlbum());
      await axios.post("/albums", album);
      dispatch(postAlbumSuccess());
      dispatch(push("/artists"));
    } catch (e) {
      const message = "Album not created";
      dispatch(postAlbumError(message));
    }
  };
};

export const stopLoading = () => {
  return { type: STOP_LOADING };
};
