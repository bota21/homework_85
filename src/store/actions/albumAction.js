import {
  FETCH_ALBUM_SUCCESS,
  FETCH_REQUEST,
  FETCH_ALBUM_ERROR,
  POST_ALBUM,
  POST_ALBUM_SUCCESS,
  POST_ALBUM_ERROR,
  STOP_LOADING,
  FETCH_USER_ALBUM,
  FETCH_USER_ALBUM_ERROR,
  FETCH_USER_ALBUM_SUCCESS,
  FETCH_ADMIN_ALBUM,
  PUT_ADMIN_ALBUM_SUCCESS,
  DELETE_ADMIN_ALBUM_SUCCESS,
  FETCH_ADMIN_ALBUM_ERROR,
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
const fetchUserAlbumRequest = () => {
  return { type: FETCH_USER_ALBUM };
};
const fetchUserAlbumSuccess = (albums) => {
  return { type: FETCH_USER_ALBUM_SUCCESS, albums };
};
const fetchUserAlbumError = (error) => {
  return { type: FETCH_USER_ALBUM_ERROR, error };
};
const fetchAdminRequest = () => {
  return { type: FETCH_ADMIN_ALBUM };
};
const putAdminAlbumSuccess = (albums) => {
  return { type: PUT_ADMIN_ALBUM_SUCCESS, albums };
};
const deleteAdminAlbumSuccess = (albums) => {
  return { type: DELETE_ADMIN_ALBUM_SUCCESS, albums };
};
const fetchAdminAlbumError = (error) => {
  return { type: FETCH_ADMIN_ALBUM_ERROR, error };
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

export const fetchAllAlbums = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get("/albums");
      dispatch(fetchAlbumSuccess(response.data));
    } catch (e) {
      dispatch(fetchAlbumError(e));
    }
  };
};

export const queryAlbums = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserAlbumRequest());
      const response = await axios.get("/albums?user=" + id);
      dispatch(fetchUserAlbumSuccess(response.data));
    } catch (e) {
      dispatch(fetchUserAlbumError(e));
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

export const deleteAlbum = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchAdminRequest());
      await axios.delete("/albums/" + id);
      const albums = [...getState().albums.albums];
      const index = albums.findIndex((album) => album.id === id);
      albums.splice(index, 1);
      dispatch(deleteAdminAlbumSuccess(albums));
    } catch (e) {
      dispatch(fetchAdminAlbumError(e));
    }
  };
};

export const putAlbum = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchAdminRequest());
      const response = await axios.put("/albums/" + id, { "published": true });
      const changedAlbum = response.data;
      const albums = [...getState().albums.albums];
      const index = albums.findIndex((album) => album.id === id);
      albums[index] = changedAlbum;
      dispatch(putAdminAlbumSuccess(changedAlbum));
    } catch (e) {
      dispatch(fetchAdminAlbumError(e));
    }
  };
};
