import React, { useState, useEffect } from "react";

import { change } from "redux-form";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import MuiTextField from "@material-ui/core/TextField";
import { Field } from "./styles.js";
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing.unit
  },
}));

export default function TextField({
  show,
  disabled,
  id,
  placeholder = "",
  data,
  value,
  required,
  width = "100px",
  mask,
  ...props
}) {
  const classes = useStyles();

  return show ? (
    <FormControl className={classes.formControl} style={{ minWidth: width }}>
      <Field
        name={id}
        disabled={disabled}
        type="text"
        label={placeholder}
        valueToSet={value}
        {...props}
        component={Component}
        required={required}
        {...mask}
      ></Field>
    </FormControl>
  ) : null;
}

function Component({
  input,
  label,
  type,
  meta: { form, dispatch, error },
  valueToSet,
  required,
  ...props
}) {
  const { name, onChange } = input;

  const [alreadySet, setAlreadySet] = useState(false);

  if (required) {
    label += " *";

    if (error) error += " *";
  }

  useEffect(() => {
    if (!alreadySet) {
      dispatch(change(form, name, valueToSet));
      setAlreadySet(true);
    }
  }, [valueToSet]);
  const classes = useStyles();
  return (
    <MuiTextField
      {...props}
      label={!error ? label : error}
      error={!!error}
      type={type}
      fullWidth
      {...input}
      onChange={onChange}
      classes={{ label: classes.input }}
    />
  );
}
