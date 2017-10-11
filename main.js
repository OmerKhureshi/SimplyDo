import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from './TodoApp.jsx'

let todoDiv = document.getElementById('todoDiv');
ReactDOM.render(<ToDoApp />, todoDiv);
