import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { Auth } from 'aws-amplify'
import Footer from './components/Footer'
import Register from './pages/Register'
import GraphBrowser from './pages/GraphBrowser'

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true)
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user)
    } catch (error) {
      console.log(error)
    }
    this.setState({ isAuthenticating: false })

  }

  render () {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }
    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <Router>
          <div>
          <Navbar auth={authProps} />
          <Switch>
            <Route exact path="/" render ={(props) => <Home {...props} auth={authProps} />}/>
            <Route exact path="/dashboard" render ={(props) => <Dashboard {...props} auth={authProps} />}/>
            <Route exact path="/graph-browser" render ={(props) => <GraphBrowser {...props} auth={authProps} />}/>
            <Route exact path="/login" render ={(props) => <Login {...props} auth={authProps} />}/>
            <Route exact path="/register" render ={(props) => <Register {...props} auth={authProps} />}/>
          </Switch>
          <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
