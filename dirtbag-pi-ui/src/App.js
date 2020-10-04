import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render ={() => <Home/>}/>
            <Route exact path="/tony" render ={() => <Dashboard/>}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
