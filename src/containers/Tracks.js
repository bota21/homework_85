import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { requestTracks } from "../store/actions/trackAction";
import Track from "../components/Track";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Tracks(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.tracks);
  const id = props.match.params.albumId;

  useEffect(() => {
    dispatch(requestTracks(id));
  }, [dispatch, id]);

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            {tracks && tracks[0] && tracks[0].album.artist.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            {tracks && tracks[0] && tracks[0].album.title}
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Track tracks={tracks} />
        </Grid>
      </Container>
    </>
  );
}
