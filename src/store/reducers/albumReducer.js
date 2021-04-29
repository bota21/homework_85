import {
  FETCH_ALBUM_SUCCESS,
  FETCH_REQUEST,
  FETCH_ALBUM_ERROR,
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
    default:
      return state;
  }
};
export default reducer;
