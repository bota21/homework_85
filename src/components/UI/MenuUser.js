import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

export default function MenuUser(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const goToProfile = () => {
    dispatch(push("/profile"));
    handleClose();
  };
  const goToTrackHistory = () => {
    dispatch(push("/track_history"));
    handleClose();
  };
  const leaveSession = () => {
    handleClose();
    props.logout();
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit">
        Hello, {props.user}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={goToProfile}>Profile</MenuItem>
        <MenuItem onClick={goToTrackHistory}>Track history</MenuItem>
        <MenuItem onClick={leaveSession}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
