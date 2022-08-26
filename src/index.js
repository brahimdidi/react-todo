import React from 'react';
import ReactDOM from 'react-dom';
// CSS file
import './App.css';
// component file
import TodoContainer from './functionComp/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
