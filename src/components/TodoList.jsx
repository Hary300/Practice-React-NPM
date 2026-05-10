import { useState, useEffect } from 'react';
export default function TodoList() {
  const [editIndex, setEditIndex] = useState(null);
  const [warning, setWarning] = useState('');
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [{ text: 'Mulai belajar', done: false }];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='component-container'>
      <h2>Practice 6 - Todo List</h2>
      <div className='todo-input-container'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* update and add button */}
        <button
          className='todo-input-button'
          onClick={() => {
            if (editIndex !== null) {
              setTodos((prev) =>
                prev.map((todo, index) => {
                  if (index === editIndex) {
                    return { ...todo, text: input };
                  }
                  return todo;
                })
              );
              setEditIndex(null);
              setInput('');
            } else {
              if (input) {
                setTodos((prev) => [...prev, { text: input, done: false }]);
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
            <li
              className='todo-item'
              key={index}
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.text}

              {/* checkbox mark done */}
              <input
                type='checkbox'
                checked={todo.done}
                onChange={() =>
                  setTodos((prev) =>
                    prev.map((todo, indexTodo) => {
                      if (indexTodo === index) {
                        return { ...todo, done: !todo.done };
                      }
                      return todo;
                    })
                  )
                }
              />

              {/*  delete button */}
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

              {/* edit button */}
              <button
                className='button edit-button'
                onClick={() => {
                  setInput(todo.text);
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
