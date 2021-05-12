import React from "react";
import { TextField, MenuItem } from "@material-ui/core";

const SelectForm = ({ array, onChange, value, id, label, name }) => {
  return (
    <div>
      <TextField
        style={{ width: "100%" }}
        id={id}
        select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined">
        {array.map((option) => (
          <MenuItem key={option._id} value={option._id}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
export default SelectForm;
