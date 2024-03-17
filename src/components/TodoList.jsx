import React from 'react';
import '../App.css'; 

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text} 
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
