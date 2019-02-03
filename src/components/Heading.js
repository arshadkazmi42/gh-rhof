import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  heading: {
    marginBottom: '10px'
  }
});

function Heading(props) {
  const { children, classes } = props;
  return (
    <div>
      <Typography className={classes.heading} variant="h4" component="h3">
        {children}
      </Typography>
    </div>
  );
}

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Heading);
