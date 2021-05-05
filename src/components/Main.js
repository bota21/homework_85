import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

const Main = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.user);

  return (
    <>
    {(user !== null) ? <Redirect to='/artists'/> : null}
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              Get started
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              Music is not available in your area
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph>
              Please
              <span> </span>
              <Button variant="outlined" disabled>
                Sign up
              </Button>{" "}
              <span> </span> and <span> </span>
              <Button variant="outlined" disabled>
                Sign in
              </Button>
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Main;
