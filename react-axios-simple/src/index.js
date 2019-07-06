import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";

// http://www.mocky.io/v2/5b472cde3200000a41301e89

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: null
    };
    this.onItemClicked = this.onItemClicked.bind(this);
    this.onTyping = this.onTyping.bind(this);
  }
  onItemClicked(person) {
    this.setState({
      greeting: person.first_name
    });
  }

  onTyping(evt) {
    console.log(evt.target.value);
    let typing = evt.target.value;
    this.setState({
      typing
    });
  }

  getHeaderText() {
    if (this.state.typing) {
      return this.state.typing;
    } else {
      return `Hello ${
        this.state.greeting ? this.state.greeting : "CodeSandbox"
        }`;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.getHeaderText()}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Content
          fetchUrl="https://www.mocky.io/v2/5b472cde3200000a41301e89"
          onItemClicked={this.onItemClicked}
        />
        <input type="text" onChange={this.onTyping} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
