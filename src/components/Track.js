import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import ModalWindow from "./UI/ModalWindow";
import YoutubeModal from "./YoutubeModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  paper: {
    display: "grid",
    gridTemplateColumns: "30px 80% 100px 100px",
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

export default function Track({ tracks, onClick }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {tracks.map((track) => (
          track && track.published && <Grid item xs={12} key={track._id} onClick={() => onClick(track._id)}>
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
                {track && track.youtube && <ModalWindow>
                 <YoutubeModal video={track.youtube}/>
               </ModalWindow>
                }               
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
