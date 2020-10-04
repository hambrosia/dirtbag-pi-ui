import React, { Component } from 'react';


class Navbar extends Component {
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
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/products" className="navbar-item">
              Products
            </a>
            <a href="/admin" className="navbar-item">
              Admin
            </a>
          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar
