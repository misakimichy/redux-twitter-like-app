import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading-bar';
import NewTweet from './NewTweet';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading
          ? null
          : <NewTweet />
        }
      </div>
    )
  }
}

// Render the Dashboard once the data from handleInitialData is finished.
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

  export default connect(mapStateToProps)(App);