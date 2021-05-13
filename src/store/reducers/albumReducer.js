import {
  FETCH_ALBUM_SUCCESS,
  FETCH_REQUEST,
  FETCH_ALBUM_ERROR,
  POST_ALBUM,
  POST_ALBUM_SUCCESS,
  POST_ALBUM_ERROR,
  STOP_LOADING,
  FETCH_USER_ALBUM,
  FETCH_USER_ALBUM_SUCCESS,
  FETCH_USER_ALBUM_ERROR,
  FETCH_ADMIN_ALBUM,
  PUT_ADMIN_ALBUM_SUCCESS,
  DELETE_ADMIN_ALBUM_SUCCESS,
  FETCH_ADMIN_ALBUM_ERROR,
} from "../actionTypes";

const initialState = {
  albums: [],
  loading: false,
  error: null,
  userAlbums: [],
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
    case FETCH_USER_ALBUM:
      return { ...state, loading: true };
    case FETCH_USER_ALBUM_SUCCESS:
      return { ...state, userAlbums: action.albums, loading: false };
    case FETCH_USER_ALBUM_ERROR:
      return { ...state, error: action.error, loading: false };
    case FETCH_ADMIN_ALBUM:
      return { ...state, loading: true };
    case PUT_ADMIN_ALBUM_SUCCESS:
      return { ...state, albums: action.albums, loading: false };
    case DELETE_ADMIN_ALBUM_SUCCESS:
      return { ...state, albums: action.albums, loading: false };
    case FETCH_ADMIN_ALBUM_ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
export default reducer;
