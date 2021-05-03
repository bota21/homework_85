import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import iconYoutube from '../../assets/icon-youtube.png';
import { Button } from '@material-ui/core';
 
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
width: '64px',
height: "44px",
padding: 0,
border: 'none'
  },
  img: {
width: '80%',
height: "80%"
  },
})); 
 
export default function ModalWindow(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
      <Button onClick={handleOpen} className={classes.button} variant='outlined'>
        <img src={iconYoutube} alt='video' className={classes.img}/>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           {props.children}    
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
 

