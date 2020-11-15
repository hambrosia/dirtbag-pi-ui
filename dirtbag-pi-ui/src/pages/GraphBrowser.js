import React, { Component } from 'react';
import Unauthenticated from './Unauthenticated';
import Iframe from 'react-iframe'

class GraphBrowser extends Component {
  render() {
    return (
      <div >
        {
          this.props.auth.isAuthenticated ? (
            <Iframe url="http://dirtbag-example-bucket-20200815222709639700000001.s3-website.us-east-2.amazonaws.com/"
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
