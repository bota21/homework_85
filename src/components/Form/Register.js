import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormElement from "../UI/FormElement";
import { useDispatch, useSelector } from "react-redux";
import { registerUsers } from "../../store/actions/userAction";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formGrid: {
    display: "flex",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
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
  
//   console.log(error);
  const getFieldError = (fieldName) => {
    try {
        console.log(error.errors[fieldName].message);
      return error.errors[fieldName];
    } catch (e) {
      return undefined;
    }
  };

  const registerUser = (e) => {
    e.preventDefault();
    dispatch(registerUsers({ ...state }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={registerUser}>
          <Grid container spacing={2} className={classes.formGrid}>
            <FormElement
              name="username"
              label="Username"
              id="username"
              onChange={changeValueHandler}
              value={state.username}
              error={!!getFieldError("username")}
              helperText={getFieldError("username")}
            />
            <FormElement
              name="password"
              label="Password"
              onChange={changeValueHandler}
              value={state.password}
              type="password"
              error={!!getFieldError("password")}
              helperText={getFieldError("password")}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
