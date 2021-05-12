import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
}));

export default function MenuButtons() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addArtist = () => {
    dispatch(push("/add_artist"));
  };
  const addAlbum = () => {
    dispatch(push("/add_album"));
  };
  const addTrack = () => {
    dispatch(push("/add_track"));
  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={addArtist}>Add Artist</Button>
        <Button onClick={addAlbum}>Add Album</Button>
        <Button onClick={addTrack}>Add Track</Button>
      </ButtonGroup>
    </div>
  );
}
