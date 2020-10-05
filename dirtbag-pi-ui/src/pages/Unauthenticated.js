import React, { Fragment } from 'react';

// Navigation bar / panel
// My Sensors List
// Sensor info / graph
// Modify / register sensor?
// Login / logout flow
// How to give a frontend a unique URL for each deployment?
// Maybe use TF to write a config file alongside the JS frontend when it's deployed to S3.

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
