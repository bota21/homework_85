import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputUpload from "../UI/InputUpload";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import { Alert } from "@material-ui/lab";
import FormElement from "../UI/FormElement";
import { requestArtists } from "../../store/actions/artistAction";
import { push } from "connected-react-router";
import SelectForm from "../UI/SelectForm";
import { createAlbum, stopLoading } from "../../store/actions/albumAction";

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

const AddAlbum = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);
  const loading = useSelector((state) => state.albums.loading);
  const error = useSelector((state) => state.albums.error);

  const [state, setState] = useState({
    title: "",
    artist: "",
    year: "",
    cover: "",
  });

  useEffect(() => {
    dispatch(requestArtists());
    dispatch(stopLoading());
  }, [dispatch]);

  useEffect(() => {
    if (artists.length) {
      setState((prevState) => {
        return { ...prevState, artist: artists[0]._id };
      });
    }
  }, [artists]);

  const cancelCreate = () => {
    dispatch(push("/artists"));
  };

  const changeValueHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const changeFileHandler = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setState((prevState) => {
      return { ...prevState, [name]: file };
    });
  };

  const submitPost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      formData.append(key, state[key]);
    });
    dispatch(createAlbum(formData));
  };

  return (
    <form onSubmit={submitPost}>
      {loading ? <Spinner /> : null}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={3} className={classes.postWrapper}>
        <Grid item xs={10}>
          <Typography variant="h4">Create New Album</Typography>
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
          <FormElement
            name="title"
            label="Album title"
            id="title"
            onChange={changeValueHandler}
            value={state.title}
          />
        </Grid>
        <Grid item xs={6}>
          <InputUpload
            label="Album cover"
            name="cover"
            value={state.cover}
            onChange={changeFileHandler}
          />
        </Grid>
        <Grid item xs={10}>
          <FormElement
            name="year"
            label="Album year"
            id="year"
            onChange={changeValueHandler}
            value={state.year}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Create New Album
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
export default AddAlbum;
