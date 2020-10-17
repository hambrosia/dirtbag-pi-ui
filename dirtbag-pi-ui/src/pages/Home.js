import React, { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <header className="App-header">
        <p>
          Welcome to DirtBag Pi.
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

export default Home;
