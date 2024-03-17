import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'; // Import CSS file

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = { text };
    setTodos([...todos, newTodo]);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Function to edit a todo
  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>TODO App</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList 
        todos={todos} 
        onDelete={deleteTodo} 
        onEdit={(index, newText) => editTodo(index, newText)}
      />
    </div>
  );
}

export default App;
