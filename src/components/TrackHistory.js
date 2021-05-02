import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 20px",
  },
  cardTrack: {
    cursor: "pointer",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardText: {
    color: "#000",
    fontSize: 18,
  },
}));

const TrackHistories = ({ trackHistory }) => {
  const classes = useStyles();

  return (
    <>
      {trackHistory.map((item) => {
        return (
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              {item &&
                item.track &&
                item.track.album &&
                item.track.album.artist &&
                item.track.album.artist.title && (
                  <Typography className={classes.cardText}>
                    Artist: {item.track.album.artist.title}
                  </Typography>
                )}
              {item && item.track && item.track.title && (
                <Typography className={classes.cardText}>
                  Track: {item.track.title}
                </Typography>
              )}
              <Typography className={classes.cardText}>
                Datetime: {item.datetime}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};

export default TrackHistories;
