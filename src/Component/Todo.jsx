
import React from 'react';
import Status from './Status';

function Todo(props) {
  

  let todoItem = props.todo.map((todo) => {
    return (
      <li className={`todo bg-gray-200 px-2 py-3 w-full rounded flex justify-between items-center mb-1 ${todo.completed ? "line-through" : "none"}`} key={todo.id} >
        <h4>{todo.title}</h4>
        <Status completed = {todo} store = {props.store}/>
      </li>
    )
  })

  return (
    <>
      {todoItem}
    </>
  );
}

export default Todo;
