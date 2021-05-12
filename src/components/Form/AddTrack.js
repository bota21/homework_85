import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import { Alert } from "@material-ui/lab";
import FormElement from "../UI/FormElement";
import { requestArtists } from "../../store/actions/artistAction";
import { push } from "connected-react-router";
import SelectForm from "../UI/SelectForm";
import { fetchAlbums, stopLoading } from "../../store/actions/albumAction";
import { createTrack } from "../../store/actions/trackAction";

const useStyles = makeStyles({
  postWrapper: {
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
  },
  postInput: {
    width: 500,
  },
  postDescription: {
    width: 500,
  },
  cancelBtn: {
    marginLeft: 20,
  },
});

const AddTrack = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  const albums = useSelector((state) => state.albums.albums);
  const loading = useSelector((state) => state.tracks.loading);
  const error = useSelector((state) => state.tracks.error);

  const [state, setState] = useState({
    artist: "",
    album: "",
    title: "",
    long: "",
    youtube: "",
  });
  
  useEffect(() => {
    dispatch(requestArtists());
    dispatch(stopLoading());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAlbums(state.artist));
    dispatch(stopLoading());
  }, [dispatch, state.artist]);

  useEffect(() => {
    if (artists.length) {
      setState((prevState) => {
        return { ...prevState, artist: artists[0]._id };
      });
    }
  }, [artists]);

  useEffect(() => {
    if (artists.length && albums.length) {
      setState((prevState) => {
        return { ...prevState, album: albums[0]._id };
      });
    }
  }, [artists, albums]);

  const changeValueHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const cancelCreate = () => {
    dispatch(push("/artists"));
  };

  const submitPost = (e) => {
    e.preventDefault();
    dispatch(createTrack({ ...state }));
  };

  return (
    <form onSubmit={submitPost}>
      {loading ? <Spinner /> : null}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={3} className={classes.postWrapper}>
        <Grid item xs={10}>
          <Typography variant="h4">Create New Track</Typography>
        </Grid>
        <Grid item xs={10}>
          <SelectForm
            label="Artist"
            name="artist"
            value={state.artist}
            onChange={changeValueHandler}
            array={artists}
          />
        </Grid>
        <Grid item xs={10}>
          <SelectForm
            label="Album"
            name="album"
            value={state.album}
            onChange={changeValueHandler}
            array={albums}
          />
        </Grid>
        <Grid item xs={10}>
          <FormElement
            name="title"
            label="Track title"
            id="title"
            onChange={changeValueHandler}
            value={state.title}
          />
        </Grid>

        <Grid item xs={10}>
          <FormElement
            name="long"
            label="Track long"
            id="description"
            onChange={changeValueHandler}
            value={state.long}
          />
        </Grid>
        <Grid item xs={10}>
          <FormElement
            name="youtube"
            label="Track address on youtube"
            id="youtube"
            onChange={changeValueHandler}
            value={state.youtube}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Create New Track
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.cancelBtn}
            onClick={cancelCreate}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default AddTrack;
