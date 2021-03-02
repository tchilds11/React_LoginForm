import React from "react";
import LoginMessage from "./LoginMessage";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      serverResponse: null
    };
  }

  _onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    const serverResponse = this.props.handleSubmit(
      this.state.username,
      this.state.password
    );
    this.setState(
      {
        serverResponse
      },
      () => {
        console.log("server response is:", serverResponse);
      }
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this._handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Your Username"
              value={this.state.username}
              onChange={(event) => {
                this._onChange(event);
              }}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={this.state.password}
              onChange={(event) => {
                this._onChange(event);
              }}
            />
          </label>
          <button type="submit">Login</button>
        </form>
        {!!this.state.serverResponse ? (
          <LoginMessage
            isValid={this.state.serverResponse.isValid}
            message={this.state.serverResponse.message}
          />
        ) : null}
      </>
    );
  }
}

export default LoginForm;
