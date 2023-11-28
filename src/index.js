import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createStore } from 'redux';

const todosArray = JSON.parse(localStorage.getItem('todos')) || [];


const todo = (state = todosArray, action) => {
  console.log(...state);
  switch (action.type) {
    case 'INITIALIZE_TODOS':
      return action.todos;
    case 'ADD_TODO':
      const newStateAdd = [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false,
        }
      ];
      saveToLocalStorage(newStateAdd);
      return newStateAdd;
    case 'TOGGLE_TODO':
      const newStateToggle = state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });

      saveToLocalStorage(newStateToggle);
      return newStateToggle;
    case 'REMOVE_TODO':
      const newStateRemove = state.filter(todo => todo.id !== action.id);
      saveToLocalStorage(newStateRemove);
      return newStateRemove;
    case 'CLEAR':
      const newStateClear = [];
      saveToLocalStorage(newStateClear);
      return newStateClear;
    default:
      return state;
  }
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
}

const store = createStore(todo);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App store={store} />
);
