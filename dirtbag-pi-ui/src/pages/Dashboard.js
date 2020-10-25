import React, { Component } from 'react';
import Unauthenticated from './Unauthenticated';


class Dashboard extends Component {
  render() {
    return (
      <div >
        {
          this.props.auth.isAuthenticated ? (
            <header className="App-header">
              <p>
                Sensors Live: 0
              </p>
              <p>
                Sensors Critical: 0/0
              </p>
              <p>
                Map
              </p>
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
