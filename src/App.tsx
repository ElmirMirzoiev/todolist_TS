import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App-Container">
      <div className="App-Content">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
