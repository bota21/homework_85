import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    justifyContent: "space-between",
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
    fontSize: 26,
  },
}));

export default function Track({ tracks }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {tracks.map((track) => (
            <Grid item xs={12} key={track._id}>
              <Paper className={classes.paper}>
                <Typography className={classes.cardText}>
                  {track.num}
                </Typography>
                <Typography className={classes.cardText}>
                  {track.title}
                </Typography>
                <Typography className={classes.cardText}>
                  {track.long}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
