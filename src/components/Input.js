import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});


class Input extends React.Component {

  render() {
    const {
      classes,
      name,
      defaultValue,
      required,
      error,
      onChange
    } = this.props;

    return (

        <TextField
            error={error}
            required={required}
            label={name}
            name={name.toLowerCase()}
            defaultValue={defaultValue}
            className={`${classes.textField} ${this.props.className}`}
            onChange={onChange}
            id="outlined-required"
            margin="normal"
            variant="outlined"
        />

    );
  }
}

Input.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(Input);
