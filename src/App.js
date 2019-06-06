import React from "react";
import MessageList from "./components/MessageList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MessageList />
      </div>
    );
  }
}

export default App;
