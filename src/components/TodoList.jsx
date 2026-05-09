import { useState } from 'react';
export default function TodoList() {
  const [editIndex, setEditIndex] = useState(null);
  const [warning, setWarning] = useState('');
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(['Mulai belajar']);

  return (
    <div className='component-container'>
      <h2>Practice 6 - Todo List</h2>
      <div className='todo-input-container'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className='todo-input-button'
          onClick={() => {
            if (editIndex !== null) {
              setTodos((prev) =>
                prev.map((todo, index) => {
                  if (index === editIndex) {
                    return input;
                  }
                  return todo;
                })
              );
              setEditIndex(null);
              setInput('');
            } else {
              if (input) {
                setTodos((prev) => [...prev, input]);
                setInput('');
                setWarning('');
              } else {
                setWarning('Please write something');
              }
            }
          }}
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </button>{' '}
        <span>{warning}</span>
      </div>
      <ol>
        {todos.map((todo, index) => {
          return (
            <li className='todo-item' key={index}>
              {todo}
              <button
                className='button delete-button'
                onClick={() =>
                  setTodos((prev) =>
                    prev.filter((todo, indexTodo) => indexTodo !== index)
                  )
                }
              >
                Delete
              </button>
              <button
                className='button edit-button'
                onClick={() => {
                  setInput(todo);
                  setEditIndex(index);
                }}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
