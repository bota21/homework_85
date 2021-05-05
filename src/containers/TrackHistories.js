import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { showHistory } from '../store/actions/trackAction';
import TrackHistory from '../components/TrackHistory';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
}));

const TrackHistories = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const trackHistory = useSelector(state => state.tracks.trackHistory);

  useEffect(() => {
dispatch(showHistory())
  }, [dispatch]);
  
  return (
    <div className={classes.root}>
        <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom>
           Track History
          </Typography>
      <Grid container spacing={3}>
        <TrackHistory trackHistory={trackHistory}/> 
      </Grid>
    </div>
  );
};

export default TrackHistories;
