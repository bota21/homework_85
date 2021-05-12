import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputUpload from "../UI/InputUpload";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import { Alert } from "@material-ui/lab";
import FormElement from "../UI/FormElement";
import { createArtist } from "../../store/actions/artistAction";
import { push } from "connected-react-router";

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

const AddArtist = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.artists.loading);
  const error = useSelector((state) => state.artists.error);

  const [state, setState] = useState({
    title: "",
    description: "",
    image: "",
  });

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
    dispatch(createArtist(formData));
  };

  return (
    <form onSubmit={submitPost}>
      {loading ? <Spinner /> : null}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={3} className={classes.postWrapper}>
        <Grid item xs={10}>
          <Typography variant="h4">Create New Artist</Typography>
        </Grid>
        <Grid item xs={10}>
          <FormElement
            name="title"
            label="Artist title"
            id="title"
            onChange={changeValueHandler}
            value={state.title}
          />
        </Grid>
        <Grid item xs={6}>
          <InputUpload
            label="Artist image"
            name="image"
            value={state.image}
            onChange={changeFileHandler}
          />
        </Grid>
        <Grid item xs={10}>
          <FormElement
            name="description"
            label="Artist description"
            id="description"
            onChange={changeValueHandler}
            value={state.description}
            rows={6}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Create New Artist
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
export default AddArtist;
