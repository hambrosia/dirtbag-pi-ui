import React from 'react';

// Navigation bar / panel
// My Sensors List
// Sensor info / graph
// Modify / register sensor?
// Login / logout flow
// How to give a frontend a unique URL for each deployment?
// Maybe use TF to write a config file alongside the JS frontend when it's deployed to S3.

function Home() {
  return (

    <div className="App">
      <header className="App-header">
        <p>
          Welcome to DirtBag Pi.
        </p>
        <a
          className="App-link"
          href="/tony"
          rel="noopener noreferrer"
        >
          Dashboard
        </a>
      </header>
    </div>
  );
}

export default Home;
