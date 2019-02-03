import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import fetch from 'node-fetch';

import {
  ButtonPrimary,
  CircularProgress,
  HallOfFame,
  Heading,
  Input,
  PopupDialog
} from '../components';


const TEMPLATE = `<a href='https://github.com/{{username}})'><img src="https://github.com/{{username}}.png" width="30" /></a>`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


const fetchContributors = async (username, repository) => {

  const response = await fetch(`https://api.github.com/repos/${username}/${repository}/contributors`);
  const contributors = await response.json();
  return formatHof(contributors);
}

const formatHof = (contributors) => {

  let hof = '';
  for (let i = 0; i < contributors.length; i++) {
    hof = `${hof}${TEMPLATE.replace(/{{username}}/g, contributors[i].login)}`
  }

  return hof;
}

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
    const contributors = await fetchContributors(username, repository);
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
      </div>
    );
  }
}

export default withStyles(styles)(Container);
