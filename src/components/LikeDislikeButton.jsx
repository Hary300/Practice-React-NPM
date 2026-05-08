import { useState } from 'react';

export default function LikeDislikeButton() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function handleLikeClick() {
    setLike((prev) => prev + 1);
  }

  function handleDislikeClick() {
    setDislike((prev) => prev + 1);
  }

  function reset() {
    setLike(0);
    setDislike(0);
  }
  return (
    <div className='component-container'>
      <h2>Practice 1 - Like Button</h2>
      <button className='like-dislike-button' onClick={handleLikeClick}>
        👎🏻Dislike ({like})
      </button>
      <button className='like-dislike-button' onClick={handleDislikeClick}>
        👍🏻Like ({dislike})
      </button>
      <button className='like-dislike-button' onClick={reset}>
        RESET
      </button>
    </div>
  );
}
