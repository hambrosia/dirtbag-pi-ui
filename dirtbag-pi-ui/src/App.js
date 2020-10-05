import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    isAuthenticated: false,
  }

  render () {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated
    }
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render ={(props) => <Home {...props} auth={authProps} />}/>
            <Route exact path="/dashboard" render ={(props) => <Dashboard {...props} auth={authProps} />}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
