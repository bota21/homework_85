import {
  FETCH_REQUEST,
  FETCH_TRACK_ERROR,
  FETCH_TRACK_HISTORY_SUCCESS,
  FETCH_TRACK_SUCCESS,
  POST_TRACK_HISTORY_ERROR,
  FETCH_TRACK_HISTORY_ERROR
} from "../actionTypes";

const initialState = {
  tracks: [],
  loading: false,
  error: null,
  trackHistory: [],
  TRError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_TRACK_SUCCESS:
      return { ...state, loading: false, tracks: action.tracks };
    case FETCH_TRACK_ERROR:
      return { ...state, loading: false, error: action.error };
    case POST_TRACK_HISTORY_ERROR:
      return { ...state, TRError: action.error };
    case FETCH_TRACK_HISTORY_SUCCESS:
      return { ...state, trackHistory: action.history };
    case FETCH_TRACK_HISTORY_ERROR:
      return { ...state, TRError: action.error };
    default:
      return state;
  }
};

export default reducer;
