import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Artist from "../components/Artist";
import { useDispatch, useSelector } from "react-redux";
import { requestArtists } from "../store/actions/artistAction";
import Spinner from "../components/UI/Spinner/Spinner";

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

export default function Artists(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  const loading = useSelector((state) => state.artists.loading);

  useEffect(() => {
    dispatch(requestArtists());
  }, [dispatch]);

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
            Artists
          </Typography>
          {loading ? <Spinner /> : null}
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph>
            Music is an art that, in one guise or another, permeates every human
            society. Modern music is heard in a bewildering profusion of styles,
            many of them contemporary, others engendered in past eras. Music is
            a protean art; it lends itself easily to alliances with words, as in
            song, and with physical movement, as in dance.
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Artist artists={artists} />
        </Grid>
      </Container>
    </>
  );
}
