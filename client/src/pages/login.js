import React, { Component } from "react";
import ReactDOM from "react-dom";

import { UsernameInput } from "../components/UsernameInput";
import { PasswordInput } from "../components/PasswordInput";
import ResetPassword from "../components/ResetPassword";
import RequestAccess from "../components/RequestAccess";
import HelloMsg from "../components/HelloMsg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this[name] = value;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <hr />
        <form>
          <HelloMsg />
          <label htmlFor="Username">Username</label>
          <UsernameInput
            type="text"
            name="userName"
            onChange={this.handleInputChange}
            value={this.state.userName}
          />
          <label htmlFor="password">Password</label>
          <PasswordInput
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <ResetPassword />
          <RequestAccess />
        </form>
      </div>
    );
  }
}
export default Login;
