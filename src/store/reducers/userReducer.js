import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from "../actionTypes";

const initialState = {
  user: null,
  registerError: null,
  loginError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.users, registerError: null };
    case REGISTER_USER_ERROR:
      return { ...state, registerError: action.error };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.users, loginError: null };
    case LOGIN_USER_ERROR:
      return { ...state, loginError: action.error };
    default:
      return state;
  }
};

export default reducer;
