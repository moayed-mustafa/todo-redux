import React from 'react';
import './App.css';
 import Todos from './Todos'
 import TodosForm from './TodosForm'

function App() {
  return (
    <div className="App">
      <TodosForm />
      <Todos/>

    </div>
  );
}

export default App;
