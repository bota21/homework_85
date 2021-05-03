import React, { useState } from "react";
import FormElement from "../UI/FormElement";
import { useDispatch, useSelector } from "react-redux";
import { registerUsers } from "../../store/actions/userAction";
import UserForm from "./UserForm";

export default function Register() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.registerError);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const changeValueHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const getFieldError = (fieldName) => {
    try {
      return error[fieldName].message;
    } catch (e) {
      return undefined;
    }
  };

  const registerUser = (e) => {
    try {
      e.preventDefault();
      dispatch(registerUsers({ ...state }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserForm sign="Sign Up" signTo='Sign In' onSubmit={registerUser} link='/login' linkText="have an">
      <FormElement
        name="username"
        label="Username"
        id="username"
        onChange={changeValueHandler}
        value={state.username}
        error={getFieldError("username")}
      />
      <FormElement
        name="password"
        label="Password"
        onChange={changeValueHandler}
        value={state.password}
        type="password"
        error={getFieldError("password")}
      />
    </UserForm>
  );
}
