import React from "react";

export class LoginForm extends React.Component {
  state = {};

  render() {
    return (
      <form
        onSubmit={event => {
          this.props.onLogin(this.state.name);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={this.state.name}
          onInput={event => this.setState({ name: event.currentTarget.value })}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}
