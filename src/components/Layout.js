import React from "react";
import AppBar from "@material-ui/core/AppBar";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarLink: {
    cursor: "pointer",
    marginRight: 20,
    fontSize: 16,
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link variant="h6" color="inherit" href="/">
            <AudiotrackIcon className={classes.icon} />
            Music
          </Link>
          <div>
            <Link
              variant="h6"
              color="inherit"
              href="/register"
              className={classes.toolbarLink}>
              Sign up
            </Link>
            <Link
              variant="h6"
              color="inherit"
              href="/login"
              className={classes.toolbarLink}>
              Sign in
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
