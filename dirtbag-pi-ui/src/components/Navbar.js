import React, { Component } from 'react';
import { Auth } from 'aws-amplify'

class Navbar extends Component {

  handleLogOut = async  event => {
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="dbp-logo.png" width="28" height="28" alt="dirtbag pi logo" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="dashboard" className="navbar-item">
              Dashboard
            </a>
            <a href="/my-sensors" className="navbar-item">
              My Sensors
            </a>
            <a href="/graph-browser" className="navbar-item">
              Graph Browser
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
            {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>
                  Hello {this.props.auth.user.username}
                </p>
              )}
              <div className="buttons">
                { !this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/login" className="button is-light">
                      Log in
                     </a>
                  </div>
                )}

                { this.props.auth.isAuthenticated && (
                  <a href="/" onClick={this.handleLogOut} className="button is-light">
                    Log Out
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar
