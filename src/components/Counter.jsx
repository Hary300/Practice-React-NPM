import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  // function increment
  function handleClickIncrement() {
    setCounter((prev) => prev + 1);
  }

  // function decrement
  function handleClickDecrement() {
    setCounter((prev) => prev - 1);
  }

  // funtion reset
  function handleReset() {
    setCounter(0);
  }
  return (
    <div className='component-container'>
      <h2>Practice 3 - Counter</h2>
      <div className='counter'>{counter}</div>
      <div className='counter-buttons-container'>
        <button
          className='decrement-increment-button button'
          onClick={handleClickDecrement}
        >
          -
        </button>
        <button className='reset-button button' onClick={handleReset}>
          RESET
        </button>
        <button
          className='decrement-increment-button button'
          onClick={handleClickIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
