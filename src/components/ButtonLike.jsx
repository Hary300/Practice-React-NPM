import { useState } from 'react';

export default function ButtonLike() {
  const [like, setLike] = useState(0);

  function handleClick() {
    setLike((prev) => prev + 1);
  }
  return <button onClick={handleClick}>Like ({like})</button>;
}
