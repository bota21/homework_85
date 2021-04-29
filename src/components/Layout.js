import React from "react";
import AppBar from "@material-ui/core/AppBar";
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <AudiotrackIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Music
          </Typography>
        </Toolbar>
      </AppBar>     
      <main>
      {props.children}
      </main>
      {/* <Container className={classes.cardGrid} maxWidth="md"> */}
      {/* <Grid container spacing={4}> */}
      
      {/* </Grid>      */}
      {/* </Container> */}
         
    </>
  );
};
export default Layout;
