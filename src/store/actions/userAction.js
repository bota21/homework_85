import { REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from "../actionTypes";
import axios from "../../axios/axiosURL";
import { push } from "connected-react-router";

const registerUserSuccess = (users) => {
  return { type: REGISTER_USER_SUCCESS, users };
};
const registerUserError = (error) => {
  return { type: REGISTER_USER_ERROR, error };
};

export const registerUsers = (users) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/users", users);
      console.log(response);
      dispatch(registerUserSuccess(response.data));
      dispatch(push("/"));
    } catch (e) {
        if(e.response && e.response.data.message) {
            dispatch(registerUserError(e.response.data));
        }
      
    }
  };
};
