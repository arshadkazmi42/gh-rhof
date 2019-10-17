import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
import { withStyles } from '@material-ui/core/styles';
import rhof from '@gh-conf/rhof'

import {
  ButtonPrimary,
  CircularProgress,
  HallOfFame,
  Heading,
  Input,
  PopupDialog,
  Credit,
} from '../components';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hof: '',
      validateMessage: '',
      showPopup: false,
      isLoading: false
    }
  }

  updateContributors = async (username, repository) => {
    const contributors = await rhof(username, repository);
    this.setState({
      hof: contributors,
      isLoading: false
    })
  }

  handleOnChange = (event) => {
    if (event.target) {
      const name = event.target.name;
      const value = event.target.value;
      console.log(value)
      this.setState({
        [name]: value
      })
    }
  }

  handleOnSubmit = async () => {

    // Validate if username and repository input is given
    if (!this.state.username || !this.state.repository) {
      this.setState({
        showPopup: true,
        validateMessage: 'Username and repository cannot be empty'
      });
      return false;
    }

    // Start Loader
    this.setState({ isLoading: true })

    // Update contributors hof in state
    await this.updateContributors(this.state.username, this.state.repository)
  }

  handlePopupClose = () => {

    // Closes popup
    this.setState({ showPopup: false })
  }

  render() {
    const {
      hof,
      isLoading,
      showPopup,
      validateMessage
    } = this.state

    return (
      <div style={{ padding: '40px' }}>
        <GithubCorner href="https://github.com/arshadkazmi42/gh-rhof" />
        <Heading>
          Generate Github Respository Hall of Fame
        </Heading>
        <PopupDialog
          showPopup={showPopup} onClose={this.handlePopupClose}
          title={'Error!!!'} message={validateMessage}
        />
        <Input required error={showPopup} name='Username' defaultValue='' onChange={this.handleOnChange} />
        <Input required error={showPopup} name='Repository' defaultValue='' onChange={this.handleOnChange} />
        <ButtonPrimary onClick={this.handleOnSubmit}>
          Get Contributors
        </ButtonPrimary>
        {isLoading && <CircularProgress />}
        {hof && <HallOfFame hof={hof} />}
        <Credit />
      </div>
    );
  }
}

export default withStyles(styles)(Container);
