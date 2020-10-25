import React, { Component } from 'react';
import { Auth } from "aws-amplify";
import Validate from "../tools/FormValidation"
import FormErrors from "../tools/FormErrors"

class Register extends Component {
    state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    }
  
    clearErrorState = () => {
      this.setState({
        errors: {
          cognito: null,
          blankfield: false,
          passwordmatch: false
        }
      });
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      this.clearErrorState();
      const error = Validate(event, this.state);
      if (error) {
        this.setState({
          errors: { ...this.state.errors, ...error }
        });
      }
  
      const { username, email, password } = this.state;
      try {
        const signUpResponse = await Auth.signUp({
          username,
          password,
          attributes: {
            email: email
          }
        });
        this.props.history.push("/welcome");
        console.log(signUpResponse);
      } catch (error) {
        let err = null;
        !error.message ? err = { "message": error } : err = error;
        this.setState({
          errors: {
            ...this.state.errors,
            cognito: err
          }
        });
      }
    }
  
    onInputChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
      document.getElementById(event.target.id).classList.remove("is-danger");
    }
  
    render() {
      return (
        <section className="section auth">
          <div className="container">
            <h1>Register</h1>
            <FormErrors formerrors={this.state.errors} />
  
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="text"
                    id="username"
                    aria-describedby="userNameHelp"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input 
                    className="input" 
                    type="password"
                    id="confirmpassword"
                    placeholder="Confirm password"
                    value={this.state.confirmpassword}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a href="/forgotpassword">Forgot password?</a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      );
    }
  }
  
  export default Register;