import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    isAuthenticated: false,
    user: null
  }

  render () {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render ={(props) => <Home {...props} auth={authProps} />}/>
            <Route exact path="/dashboard" render ={(props) => <Dashboard {...props} auth={authProps} />}/>
            <Route exact path="/login" render ={(props) => <Login {...props} auth={authProps} />}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
