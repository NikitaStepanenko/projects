import React from "react";

const TodoOptions = ({ showAllTodos, showCompletedTodos, showActiveTodos }) => {
  return (
    <div className="todo-options">
      <div className="all-todos" onClick={showAllTodos}>
        All
      </div>
      <div className="completed-todos" onClick={showCompletedTodos}>
        Completed
      </div>
      <div className="active-todos" onClick={showActiveTodos}>
        Active
      </div>
    </div>
  );
};

export default TodoOptions;
