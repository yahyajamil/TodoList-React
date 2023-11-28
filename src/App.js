import React, { useEffect, useState } from 'react';
import Input from "./Component/Input";
import TodoList from "./Component/TodoList";

function App({ store }) {

    const [, setTodos] = useState(store.getState());

  useEffect(() => {
    const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
    store.dispatch({ type: 'INITIALIZE_TODOS', todos: initialTodos });

    const unsubscribe = store.subscribe(() => {
      setTodos(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, [store]);


    const todos = store.getState()

    return (
        <>
            <div className="content pt-6 flex justify-center items-center flex-col">
                <h1 className="text-center text-4xl font-semibold md:text-5xl mb-4">Todo List App <i className="fa fa-check text-3xl text-blue-500 border-2 border-blue-500 rounded-full w-10 h-10"></i></h1>
                <Input store = { store } />
            </div>
            <TodoList todos={todos} store = { store }/>
        </>
    )

}

export default App;

