import React from "react";

const TodoOptions = ({ showAllTodos, showComplitedTodos, showActiveTodos }) => {
  return (
    <div className="todo-options">
      <div className="all-todos" onClick={() => showAllTodos}>
        All
      </div>
      <div className="complited-todos" onClick={() => showComplitedTodos}>
        Complited
      </div>
      <div className="active-todos" onClick={() => showActiveTodos}>
        Active
      </div>
    </div>
  );
};

export default TodoOptions;
