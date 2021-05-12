import {
  FETCH_ALBUM_SUCCESS,
  FETCH_REQUEST,
  FETCH_ALBUM_ERROR,
  POST_ALBUM,
  POST_ALBUM_SUCCESS,
  POST_ALBUM_ERROR,
  STOP_LOADING,
} from "../actionTypes";

const initialState = {
  albums: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_ALBUM_SUCCESS:
      return { ...state, albums: action.albums, loading: false };
    case FETCH_ALBUM_ERROR:
      return { ...state, error: action.error, loading: false };
    case POST_ALBUM:
      return { ...state, loading: true };
    case POST_ALBUM_SUCCESS:
      return { ...state, loading: false };
    case POST_ALBUM_ERROR:
      return { ...state, loading: false, error: action.error };
    case STOP_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default reducer;
