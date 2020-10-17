import React, { Fragment } from 'react';

function Unauthenticated() {
  return (
    <Fragment>
      <header className="App-header">
        <p>
          Please log in to access this feature.
        </p>
        <a
          className="App-link"
          href="/login"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </header>
    </Fragment>
  );
}

export default Unauthenticated;
