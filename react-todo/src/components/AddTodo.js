import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
    status: false
  };
  handlChange = e => {
    this.setState({ content: e.target.value });
  };
  handlSubmit = e => {
    e.preventDefault();
    const characters = /[A-Za-z0-9А-Яа-я]/;
    if (characters.test(this.state.content)) {
      this.props.addTodo(this.state);
      console.log(this.state);
      this.setState({
        content: ""
      });
    }
  };

  render() {
    const { content } = this.state;
    return (
      <div>
        <form onSubmit={this.handlSubmit}>
          <input
            className="add-todo"
            type="text"
            name="addTodoInput"
            placeholder="add todo"
            onChange={this.handlChange}
            value={content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
