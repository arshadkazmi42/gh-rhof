import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    margin: '10px 0',
    color: 'rgba(0,0,0,0.87)',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    letterSpacing: '0.00735em'
  },
  link: {
    color: theme.palette.primary.main
  }
});

function Credit({ classes}) {
  return (
    <div className={classes.footer}>
      <b>Credit:</b> Favicon made by <a className={classes.link} href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a> from <a className={classes.link} href="http://www.flaticon.com/">www.flaticon.com</a>
    </div>
  );
};

Credit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Credit);