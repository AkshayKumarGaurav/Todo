import React from 'react';
import '../App.css'; 

function TodoItem({ todo, onEdit }) {
  return (
    <div>
      {todo.text} 
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default TodoItem;
