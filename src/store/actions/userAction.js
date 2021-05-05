import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from "../actionTypes";
import axios from "../../axios/axiosURL";
import { push } from "connected-react-router";

const registerUserSuccess = (users) => {
  return { type: REGISTER_USER_SUCCESS, users };
};
const registerUserError = (error) => {
  return { type: REGISTER_USER_ERROR, error };
};
const loginUserSuccess = (users) => {
  return { type: LOGIN_USER_SUCCESS, users };
};
const loginUserError = (error) => {
  return { type: LOGIN_USER_ERROR, error };
};

export const registerUsers = (users) => {
  return async (dispatch) => {
    try {
      await axios.post("/users", users);
      dispatch(registerUserSuccess());
      dispatch(push("/"));
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(registerUserError(e.response.data.errors));
      }
    }
  };
};

export const loginUsers = (users) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users/sessions", users);
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/artists"));
    } catch (e) {
      if (e.response && e.response.data) {
        console.log(e.response);
        dispatch(loginUserError(e.response.data));
      }
    }
  };
};

export const logoutUser = () => { 
  return {type: LOGOUT_USER};
};