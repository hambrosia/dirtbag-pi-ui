import React, { Component } from 'react';
import Unauthenticated from './Unauthenticated';


class Dashboard extends Component {
  render() {
    return (
      <div >
        {
          this.props.isAuthenticated ? (
            <header className="App-header">
              <p>
                This will be the dashboard
            </p>
              <a
                className="App-link"
                href="/tony"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
            </a>
            </header>
          ) : (
              <Unauthenticated />
            )

        }
      </div>
    );
  }

}

export default Dashboard;
