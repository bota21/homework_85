import {
  FETCH_ALBUM_SUCCESS,
  FETCH_REQUEST,
  FETCH_ALBUM_ERROR,
} from "../actionTypes";
import axios from "../../axios/axiosURL";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};

const fetchAlbumSuccess = (albums) => {
  return { type: FETCH_ALBUM_SUCCESS, albums };
};

const fetchAlbumError = (error) => {
  return { type: FETCH_ALBUM_ERROR, error };
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
