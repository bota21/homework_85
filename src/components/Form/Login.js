import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormElement from "../UI/FormElement";
import { useDispatch, useSelector } from "react-redux";
import { loginUsers } from "../../store/actions/userAction";
import { Alert } from "@material-ui/lab";
import UserForm from "./UserForm";
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  alert: {
    marginTop: theme.spacing(3),
    marginBottom: 10,
    width: "100%",
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.loginError);
  const user = useSelector((state) => state.user.user);

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

  const loginUser = (e) => {
    try {
      e.preventDefault();
      dispatch(loginUsers({ ...state }));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserForm sign="Sign In" signTo='Sing Up' onSubmit={loginUser} link='/register' linkText="haven't an">
      {(user !== null) ? <Redirect to='/artists'/> : null}
      {error ? (
        <Alert severity="error" className={classes.alert}>
          {error}
        </Alert>
      ) : null}
      <FormElement
        name="username"
        label="Username"
        id="username"
        onChange={changeValueHandler}
        value={state.username}
      />
      <FormElement
        name="password"
        label="Password"
        onChange={changeValueHandler}
        value={state.password}
        type="password"
      />
    </UserForm>
  );
}
