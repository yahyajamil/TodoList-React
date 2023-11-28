import React, { useState } from "react";
import List from "./List";
import DropDown from "./DropDown";

function TodoList(props) {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filterTodos = () => {
    const { todos } = props;

    switch (filter) {
      case "Completed":
        return todos.filter((todo) => todo.completed);
      case "Pending":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = filterTodos();
  

  return (
    <>
      <div className="todo-list mt-10 px-11 xl:px-52">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Todo List</h3>
          <div>
            <DropDown
              store={props.store}
              selectedFilter={filter}
              onFilterChange={handleFilterChange}
            />
            <button
              onClick={() => {
                props.store.dispatch({ type: "CLEAR" });
              }}
              className="clear bg-red-600 text-white py-1 px-2 rounded scale-110 hover:scale-105 hover:bg-red-700 mx-2"
            >
              Clear List
            </button>
          </div>
        </div>
        <List todo={filteredTodos} store={props.store} />
      </div>
    </>
  );
}

export default TodoList;
