import React, { Component } from "react";
import { AddBtn } from "../components/AddBtn";
import { Link } from "react-router-dom";
import { UsernameInput } from "../components/UsernameInput";
import { PasswordInput } from "../components/PasswordInput";
import ResetPassword from "../components/ResetPassword";
import RequestAccess from "../components/RequestAccess";
import HelloMsg from "../components/HelloMsg";
import SecurityRole from "../components/SecurityRole";

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
        <div id ="welcome">
          WELCOME TO TRAX SYSTEM
          <h2>Manage and track your assets all in one place </h2>
        </div>

        <h1>LOGIN</h1>
        <hr />
        <div class="row">
        <div id="loginSpace" class="col-md-8">
          <form class="loginForm">
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
            <AddBtn id="loginBtn" ><Link id="loginBtnLink" to="/initiator">LOGIN</Link></AddBtn>
            <ResetPassword />
            <RequestAccess />
          </form>
          </div>
          <div class="col-md-4">
          <img id="clipboard" src="/images/loginimg.jpg" alt="error loading" />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
