import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  formControl: {
      margin: theme.spacing.unit,
  }
}));

function DatePickers({
    show,
    width,
    type,
    id,
    placeholder = "",
    data,
    value,
    required,
    mask,
    ...props
}) {
  const classes = useStyles();

  return show ? (
    <form className={classes.formControl} noValidate style={{width: width}}>
      <TextField
        id="date"
        label={placeholder}
        type="date"
      />
    </form>
  ) : null;
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(DatePickers);