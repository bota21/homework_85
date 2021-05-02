import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../store/actions/albumAction";
import Album from "../components/Album";
import { Button } from "@material-ui/core";

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

export default function Albums(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.albums);
  const id = props.match.params.artistId;
  
  useEffect(() => {
    dispatch(fetchAlbums(id));
  }, [dispatch, id]);

  const goBack = () => {
    props.history.goBack();
  };

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
            {albums && albums[0] && albums[0].artist.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph></Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Album albums={albums} />
        </Grid>
        <Button color="primary" variant="contained" onClick={goBack}>
          Back
        </Button>
      </Container>
    </>
  );
}
