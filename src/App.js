import React, { Component, Fragment } from "react";
import { Greeter } from "./greeter";
import { LoginForm } from "./LoginForm";
import { UserList } from "./UserList";
import { MessageList } from "./MessageList";
import { NewMessage } from "./NewMessage";

import "./styles.css";

class App extends Component {
  state = {};

  componentWillMount() {
    this.props.client.stateChanges.subscribe(x => this.setState({ data: x }));
  }

  render() {
    return (
      <div className="app">
        {!this.state.data.chat.isAuthenticated && (
          <LoginForm onLogin={name => this.props.client.tryLogin(name)} />
        )}
        {/*JSON.stringify(this.state.data)*/}
        <Greeter name={this.state.name} />
        {this.state.data.chat.isAuthenticated && (
          <div className="chat-content">
            <UserList users={this.state.data.chat.users} />
            <MessageList messages={this.state.data.chat.messages} />
            <NewMessage
              onSendText={newMessage => this.props.client.sendText(newMessage)}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
