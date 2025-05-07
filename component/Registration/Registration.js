import React, { Component } from "react";
import "./Registration.css";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      array: []
    };
  }

  updateName = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, array } = this.state;

   
    const newEntry = { name, email, password };
    this.setState({
      array: [...array, newEntry],
      name: "",
      email: "",
      password: ""
    });
  };

  render() {
    const { array, name, email, password } = this.state;
    return (
      <div className="registration-container ">
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit} className="registration-form">
          <label>
            Name:
            <input
            className="registration-form input "
              type="text"
              name="name"
              value={name}
              onChange={this.updateName}
            />
          </label>
          <br />
          <label >
            Email:
            <input
              className="registration-form input"
              type="email"
              name="email"
              value={email}
              onChange={this.updateName}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="registration-form input"
              type="text"
              name="password"
              value={password}
              onChange={this.updateName}
            />
          </label>
          <br />
          <button type="submit" className="registration-form button">Register</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index) => (
              <tr className="tablerow" key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Registration;
