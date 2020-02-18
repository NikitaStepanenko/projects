import React from "react";

const Todos = ({ todos }) => {
  const todoList = todos.map(todo => {
    return (
      <div className="collection-item" key={todo.id}>
        ><span>{todo.content}</span>
      </div>
    );
  });
  return <div>{todoList}</div>;
};

export default Todos;
