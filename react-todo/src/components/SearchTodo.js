import React from "react";

const SearchTodo = ({ searchGoal }) => {
  function handleChange(e) {
    const searchElem = e.target.value.toLowerCase();
    searchGoal(searchElem);
  }
  return (
    <form>
      <input
        className="input-todo"
        type="text"
        name="search"
        placeholder="search todo"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchTodo;
