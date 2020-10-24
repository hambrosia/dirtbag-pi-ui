import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        { !this.props.auth.isAuthenticated && (
        <header className="App-header">
        <p>
          Welcome to DirtBag Pi.
        </p>
        <a
          className="App-link"
          href="/login"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </header>
      )}
        { this.props.auth.isAuthenticated && this.props.auth.user && (
        <header className="App-header">
        <p>
          Welcome back, {this.props.auth.user.username}!
        </p>
        <a
          className="App-link"
          href="/sensors"
          rel="noopener noreferrer"
        >
          Go to My Sensors
        </a>
      </header>
      )}
      </div>
    );
  }
}

export default Home;
