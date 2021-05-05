import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbarLink: {
    cursor: "pointer",
    marginRight: 20,
    fontSize: 16,
  },
}));

const MenuAnonymous = () => {
  const classes = useStyles();
  return (
    <>
      <Link
        variant="h6"
        color="inherit"
        href="/register"
        className={classes.toolbarLink}>
        Sign up
      </Link>
      <Link
        variant="h6"
        color="inherit"
        href="/login"
        className={classes.toolbarLink}>
        Sign in
      </Link>
    </>
  );
};

export default MenuAnonymous;
