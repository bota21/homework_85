import {
  FETCH_ARTIST_SUCCESS,
  FETCH_REQUEST,
  FETCH_ARTIST_ERROR,
  POST_ARTIST,
  POST_ARTIST_SUCCESS,
  POST_ARTIST_ERROR,
  FETCH_USER_ARTIST_REQUEST,
  FETCH_USER_ARTIST_SUCCESS,
  FETCH_USER_ARTIST_ERROR,
  FETCH_ADMIN_ARTIST,
  PUT_ADMIN_ARTIST_SUCCESS,
  DELETE_ADMIN_ARTIST_SUCCESS,
  FETCH_ADMIN_ARTIST_ERROR,
} from "../actionTypes";

const initialState = {
  artists: [],
  loading: false,
  error: null,
  userArtists: [],
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
    case FETCH_USER_ARTIST_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_ARTIST_SUCCESS:
      return { ...state, loading: false, userArtists: action.artists };
    case FETCH_USER_ARTIST_ERROR:
      return { ...state, loading: false, error: action.error };
    case FETCH_ADMIN_ARTIST:
      return { ...state, loading: true };
    case PUT_ADMIN_ARTIST_SUCCESS:
      return {
        ...state,
        loading: false,
        artists: action.artists
      };
    case DELETE_ADMIN_ARTIST_SUCCESS:
      return { ...state, loading: false, artists: action.artists };
    case FETCH_ADMIN_ARTIST_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
