import {
  FETCH_REQUEST,
  FETCH_TRACK_ERROR,
  FETCH_TRACK_HISTORY_SUCCESS,
  FETCH_TRACK_SUCCESS,
  POST_TRACK_HISTORY_ERROR,
  FETCH_TRACK_HISTORY_ERROR,
  STOP_LOADING,
  POST_TRACK,
  POST_TRACK_SUCCESS,
  POST_TRACK_ERROR,
  FETCH_USER_TRACK,
  FETCH_USER_TRACK_SUCCESS,
  FETCH_USER_TRACK_ERROR,
  FETCH_ADMIN_TRACK,
  PUT_ADMIN_TRACK_SUCCESS,
  DELETE_ADMIN_TRACK_SUCCESS,
  FETCH_ADMIN_TRACK_ERROR,
} from "../actionTypes";

const initialState = {
  tracks: [],
  loading: false,
  error: null,
  trackHistory: [],
  TRError: null,
  userTracks: [],
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
    case STOP_LOADING:
      return { ...state, loading: false };
    case POST_TRACK:
      return { ...state, loading: true };
    case POST_TRACK_SUCCESS:
      return { ...state, loading: false };
    case POST_TRACK_ERROR:
      return { ...state, loading: false, error: action.error };
    case FETCH_USER_TRACK:
      return { ...state, loading: true };
    case FETCH_USER_TRACK_SUCCESS:
      return { ...state, loading: false, userTracks: action.tracks };
    case FETCH_USER_TRACK_ERROR:
      return { ...state, loading: false, error: action.error };
    case FETCH_ADMIN_TRACK:
      return { ...state, loading: true };
    case PUT_ADMIN_TRACK_SUCCESS:
      return {
        ...state,
        tracks: action.tracks,
        loading: false,
      };
    case DELETE_ADMIN_TRACK_SUCCESS:
      return { ...state, tracks: action.tracks, loading: false };
    case FETCH_ADMIN_TRACK_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
