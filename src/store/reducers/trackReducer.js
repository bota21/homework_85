import {
  FETCH_REQUEST,
  FETCH_TRACK_ERROR,
  FETCH_TRACK_SUCCESS,
} from "../actionTypes";

const initialState = {
  tracks: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_TRACK_SUCCESS:
      return { ...state, loading: false, tracks: action.tracks };
    case FETCH_TRACK_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
