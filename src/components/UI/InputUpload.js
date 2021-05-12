import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useRef, useState } from "react";

const useStyles = makeStyles({
  input: {
    display: "none",
  },
  textField: {
    width: "80%",
  },
  btnSubmit: {
    marginLeft: 20,
    height: 56,
    width: 100,
  },
});

const InputUpload = ({ label, name, onChange, error }) => {
  const [file, setFile] = useState("");
  const inputRef = useRef();
  const classes = useStyles();

  const changeFile = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0].name);
    } else {
      setFile("");
    }
    onChange(e);
  };

  const activateInput = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        className={classes.input}
        name={name}
        onChange={changeFile}
        ref={inputRef}
      />
      <Grid container>
        <Grid item xs={10}>
          <TextField
            variant="outlined"
            disabled
            label={label}
            name={name}
            value={file}
            onClick={activateInput}
            className={classes.textField}
            error={!!error}
            helperText={error}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={activateInput}
            className={classes.btnSubmit}>
            Choose image
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default InputUpload;
