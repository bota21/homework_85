import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const FormElement = (props) => {
  return (
    <>
      <Grid item xs>
        <TextField
          fullWidth
          variant="outlined"
          required={props.required}
          error={!!props.error}
          helperText={props.error}
          id={props.name}
          label={props.label}
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          autoComplete={props.name}
        />
      </Grid>
    </>
  );
};

FormElement.propTypes = {
  reqired: PropTypes.bool, 
  type: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormElement;
