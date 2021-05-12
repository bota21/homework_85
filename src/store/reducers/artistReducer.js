import {
  FETCH_ARTIST_SUCCESS,
  FETCH_REQUEST,
  FETCH_ARTIST_ERROR,
  POST_ARTIST,
  POST_ARTIST_SUCCESS,
  POST_ARTIST_ERROR,
} from "../actionTypes";

const initialState = {
  artists: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_ARTIST_SUCCESS:
      return { ...state, loading: false, artists: action.artists };
    case FETCH_ARTIST_ERROR:
      return { ...state, loading: false, error: action.error };
    case POST_ARTIST:
      return { ...state, loading: true };
    case POST_ARTIST_SUCCESS:
      return { ...state, loading: false };
    case POST_ARTIST_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
