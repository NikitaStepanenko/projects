import React, { Component } from "react";
import Todos from "./components/Todos";
import SearchTodo from "./components/SearchTodo";
import AddTodo from "./components/AddTodo";
import TodoOptions from "./components/TodoOptions";

class App extends Component {
  state = {
    keyWord: "",
    todos: [
      { id: 1, content: "buy some milk", status: true },
      { id: 2, content: "play mario kart", status: false },
      { id: 3, content: "play mario kart", status: false },
      { id: 5, content: "abc", status: false },
      { id: 4, content: "play mario kart", status: false }
    ]
  };
  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  checkTodo = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.status ? (todo.status = false) : (todo.status = true);
      }
      return todo;
    });
    this.setState({
      todos: todos
    });
  };

  showAllTodos = () => {
    const todos = this.state.todos.map(todo => {
      if (todo.status) {
        todo.status = false;
      }
      return todo;
    });
    this.setState({
      todos: todos
    });
  };
  showComplitedTodos = () => {};
  showActiveTodos = () => {};

  // searchTodo = inputContent => {
  //   let todos = this.state.todos.map(todo => {
  //     let todoContent = todo.content.toLowerCase();
  //     console.log("App", todo.content);
  //     if (!todoContent.includes(inputContent) && inputContent !== "") {
  //       console.log("true");
  //       todo.hide = true;
  //     } else {
  //       console.log("false");
  //       todo.hide = false;
  //     }
  //     return todo;
  //   });
  //   this.setState({
  //     todos: todos
  //   });
  // };

  searchTodo = inputContent => {
    this.setState({
      keyWord: inputContent
    });
  };

  render() {
    const filteredTodos = this.state.todos.filter(todo => {
      return todo.content.includes(this.state.keyWord);
    });
    return (
      <div className="App">
        <header className="header">
          <h1 className="logo">todos</h1>
        </header>
        <main className="main">
          <SearchTodo searchGoal={this.searchTodo} />
          <div className="scroll">
            <Todos
              todos={filteredTodos}
              deleteTodo={this.deleteTodo}
              checkTodo={this.checkTodo}
            />
          </div>
          <AddTodo addTodo={this.addTodo} />
          <TodoOptions />
        </main>
      </div>
    );
  }
}

export default App;
