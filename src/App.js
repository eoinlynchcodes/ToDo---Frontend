import React, { Fragment } from 'react';
import './App.css';

import InputToDo from "./components/InputToDo";
import ListTodos from './components/ListToDos';

function App() {
  return (
  <Fragment>
    <div className="container">
    <InputToDo/>
    <ListTodos/>
    </div>
  </Fragment>);
}

export default App;
