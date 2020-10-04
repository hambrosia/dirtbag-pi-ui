import React from 'react';
import logo from '../logo.svg';

// Navigation bar / panel
// My Sensors List
// Sensor info / graph
// Modify / register sensor?
// Login / logout flow
// How to give a frontend a unique URL for each deployment?
// Maybe use TF to write a config file alongside the JS frontend when it's deployed to S3.

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         This will be the dashboard
        </p>
        <a
          className="App-link"
          href="/tony"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Dashboard;
