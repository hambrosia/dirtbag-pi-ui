import React, { Component } from 'react';
import Unauthenticated from './Unauthenticated';
import { Storage } from 'aws-amplify'


class Dashboard extends Component {

   async componentDidMount() {

      const data = await Storage.list()
      console.log(data)

    // try {
    //   const data = await Storage.list()
    //   console.log(data)

    // } catch(error) {
    //   let err = null;
    //   !error.message ? err = {"message": error} : err = error
    //   this.setState({
    //     errors: {
    //       ...this.state.errors,
    //       cognito: err
    //     }
    //   })
    // }
  };


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
