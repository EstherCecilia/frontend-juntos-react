import ReactDOM from "react-dom";
import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: ""
    }));
    localStorage.setItem("curses", this.state.list);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  removeItem(index) {
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={e => this.handleChange(e)} />
        <button onClick={this.handleSubmit}>Add</button>
        <ol>
          {this.state.list.map((item, index) => {
            return (
              <span>
                {item}
                <button onClick={() => this.removeItem(index)}>Delete</button>
              </span>
            );
          })}
        </ol>
      </div>
    );
  }
}
