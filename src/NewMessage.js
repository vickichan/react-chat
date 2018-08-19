import React from "react";

export class NewMessage extends React.Component {
  state = {};

  render() {
    return (
      <form
        onSubmit={event => {
          this.props.onSendText(this.state.newMessage);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder=""
          value={this.state.newMessage}
          onInput={event =>
            this.setState({ newMessage: event.currentTarget.value })
          }
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
