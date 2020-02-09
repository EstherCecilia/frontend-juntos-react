import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlusSquare } from '@fortawesome/fontawesome-free-solid'


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
    localStorage.setItem("courses", this.state.list);
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
                <Input placeholder="Matérias" value={this.state.text} onChange={e => this.handleChange(e)} />

        {/* <input value={this.state.text} onChange={e => this.handleChange(e)} /> */}
        <FontAwesomeIcon onClick={this.handleSubmit} icon={faPlusSquare} />
        <ol>
          {this.state.list.map((item, index) => {
            return (
              <span>
                {item}
                <FontAwesomeIcon onClick={() => this.removeItem(index)} icon={faTrashAlt} />
              </span>
            );
          })}
        </ol>
      </div>
    );
  }
}
