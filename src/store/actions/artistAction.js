import axios from "../../axios/axiosURL";
import {
  FETCH_ARTIST_SUCCESS,
  FETCH_REQUEST,
  FETCH_ARTIST_ERROR,
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
