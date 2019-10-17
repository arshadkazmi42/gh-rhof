import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {CodeView, Paper} from '../components';

const styles = () => ({
  hof: {
    margin: 'auto',
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  hofRender: {
    flex: 1,
    marginBottom: '20px'
  },
  hofMarkdown: {
    flex: 1
  }
});

function HallOfFame(props) {
  const {hof, classes} = props;
  return (
      <div className={classes.hof}>
        <div className={classes.hofRender}>
          <Paper title={'Hall of Fame'}>
            <div dangerouslySetInnerHTML={{__html: hof}}/>
          </Paper>
        </div>
        <div className={classes.hofMarkdown}>
          <Paper title={'Markdown Code'}>
            <CodeView>{hof}</CodeView>
          </Paper>
        </div>
      </div>
  );
}

HallOfFame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HallOfFame);
