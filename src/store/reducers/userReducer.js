import { REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from "../actionTypes";

const initialState = {
  user: null,
  registerError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return { ...state, user: action.users };
    case REGISTER_USER_ERROR:
      return { ...state, registerError: action.error };
    default:
      return state;
  }
};

export default reducer;
