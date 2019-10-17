import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const {children, classes, onClick} = props;
  return (
      <Button
          variant="contained"
          color="primary"
          className={`${classes.button} ${props.className}`}
          onClick={onClick}
      >
        {children}
      </Button>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default withStyles(styles)(ContainedButtons);
