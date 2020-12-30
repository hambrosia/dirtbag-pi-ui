import React, { Component } from 'react';
import Unauthenticated from './Unauthenticated';
import Iframe from 'react-iframe'
import { Storage } from 'aws-amplify'

class GraphBrowser extends Component {
  state = {
    indexURL: ""
  }

  async componentDidMount() {
    
    Storage.get('index.html')
    .then(result => {
      console.log(result)
      this.setState({indexURL: result
      })})
    .catch(err => console.log(err))
    console.log('result: ' + this.state.indexURL)
  }

  render() {
    
    return (
      <div >
        {
          this.props.auth.isAuthenticated ? (
            <Iframe url={this.state.indexURL}
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
