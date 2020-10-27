import React, { Component } from 'react';
import Unauthenticated from './Unauthenticated';
import Iframe from 'react-iframe'

class GraphBrowser extends Component {
  render() {
    return (
      <div >
        {
          this.props.auth.isAuthenticated ? (
            <Iframe url=""
            width="90%"
            height="800px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            />
          ) : (
              <Unauthenticated />
            )

        }
      </div>
    );
  }

}

export default GraphBrowser;
