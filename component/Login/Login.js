import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  update = (event) => {
    event.preventDefault(); // Prevent form submission
    const { username, password } = this.state;
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Login Successful");
    }
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <label>Username:</label>
          <input
            className="login-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />
          <label>Password:</label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <button className="login-button" onClick={this.update}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;