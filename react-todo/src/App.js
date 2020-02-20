import React, { Component } from "react";
import Todos from "./components/Todos";
import SearchTodo from "./components/SearchTodo";
import AddTodo from "./components/AddTodo";
import TodoOptions from "./components/TodoOptions";

class App extends Component {
  state = {
    optionStatus: "",
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
    this.setState({
      keyWord: "",
      optionStatus: ""
    });
  };
  showCompletedTodos = () => {
    this.setState(prevState => ({ ...prevState, optionStatus: "completed" }));
  };
  showActiveTodos = () => {
    this.setState(prevState => ({ ...prevState, optionStatus: "active" }));
  };

  searchTodo = inputContent => {
    this.setState({
      keyWord: inputContent
    });
  };

  render() {
    const { keyWord } = this.state;
    const { optionStatus } = this.state;
    let filteredTodos = this.state.todos.filter(todo =>
      todo.content.toLowerCase().includes(keyWord)
    );
    if (optionStatus === "active") {
      filteredTodos = filteredTodos.filter(todo => !todo.status);
    } else if (optionStatus === "completed") {
      filteredTodos = filteredTodos.filter(todo => todo.status);
    }

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
          <TodoOptions
            showAllTodos={this.showAllTodos}
            showCompletedTodos={this.showCompletedTodos}
            showActiveTodos={this.showActiveTodos}
          />
        </main>
      </div>
    );
  }
}

export default App;
