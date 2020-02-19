import React from "react";

const Todos = ({ todos, deleteTodo, checkTodo }) => {
  const todoList = todos.map(todo => {
    return (
      <div
        className={`list stroke goal-from-list ${todo.hide ? "hide" : ""}`}
        key={todo.id}
      >
        <span>
          <div className="stroke">
            <div className="goal">
              <div
                name="check"
                className="icon-check"
                onClick={() => checkTodo(todo.id)}
              ></div>
              <p className={`todo-content ${todo.status ? "checked" : ""}`}>
                {todo.content}
              </p>
            </div>
            <div
              className=" delete icon-trash"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            ></div>
          </div>
        </span>
      </div>
    );
  });
  return <div>{todoList}</div>;
};

export default Todos;
