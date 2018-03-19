import React, { Component } from "react";
import ReactDOM from "react-dom";

import { UsernameInput } from "../components/LoginPage/UsernameInput";
import { PasswordInput } from "../components/LoginPage/PasswordInput";
import ResetPassword from "../components/LoginPage/ResetPassword";
import RequestAccess from "../components/LoginPage/RequestAccess";
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
          <UsernameInput
            type="text"
            name="userName"
            onChange={this.handleInputChange}
            value={this.state.userName}
          />
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
