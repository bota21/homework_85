import axios from "../../axios/axiosURL";
import { push } from "connected-react-router";
import {
  FETCH_ARTIST_SUCCESS,
  FETCH_REQUEST,
  FETCH_ARTIST_ERROR,
  POST_ARTIST,
  POST_ARTIST_SUCCESS,
  POST_ARTIST_ERROR,
  FETCH_USER_ARTIST_REQUEST,
  FETCH_USER_ARTIST_ERROR,
  FETCH_USER_ARTIST_SUCCESS,
  FETCH_ADMIN_ARTIST,
  PUT_ADMIN_ARTIST_SUCCESS,
  DELETE_ADMIN_ARTIST_SUCCESS,
  FETCH_ADMIN_ARTIST_ERROR,
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
const fetchUserArtistRequest = () => {
  return { type: FETCH_USER_ARTIST_REQUEST };
};
const fetchUserArtistSuccess = (artists) => {
  return { type: FETCH_USER_ARTIST_SUCCESS, artists };
};
const fetchUserArtistError = (error) => {
  return { type: FETCH_USER_ARTIST_ERROR };
};
const fetchAdminRequest = () => {
  return { type: FETCH_ADMIN_ARTIST };
};
const putAdminArtistSuccess = (artists) => {
  return { type: PUT_ADMIN_ARTIST_SUCCESS, artists };
};
const deleteAdminArtistSuccess = (artists) => {
  return { type: DELETE_ADMIN_ARTIST_SUCCESS, artists };
};
const fetchAdminArtistError = (error) => {
  return { type: FETCH_ADMIN_ARTIST_ERROR, error };
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
export const queryArtists = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserArtistRequest());
      const response = await axios.get("/artists?user=" + id);
      dispatch(fetchUserArtistSuccess(response.data));
    } catch (e) {
      dispatch(fetchUserArtistError(e));
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
      const message = "Album not created";
      dispatch(postArtistError(message));
    }
  };
};

export const deleteArtist = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchAdminRequest());
      await axios.delete("/artists/" + id);
      const artists = [...getState().artists.artists];
      const index = artists.findIndex((artist) => artist.id === id);
      artists.splice(index, 1);
      dispatch(deleteAdminArtistSuccess(artists));
    } catch (e) {
      dispatch(fetchAdminArtistError(e));
    }
  };
};

export const putArtist = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchAdminRequest());
      const response = await axios.put("/artists/" + id, { "published": true });
      const changedArtist = response.data;
      const artists = [...getState().artists.artists];
      const index = artists.findIndex((artist) => artist.id === id);
      artists[index] = changedArtist;
      dispatch(putAdminArtistSuccess(changedArtist));
    } catch (e) {
      dispatch(fetchAdminArtistError(e));
    }
  };
};
