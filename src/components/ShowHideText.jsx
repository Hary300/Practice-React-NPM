import { useState } from 'react';

// export default function ShowHideText() {
//   const [text, setText] = useState('Hello React');
//   const [buttonText, setButtonText] = useState('Hide');
//   const [show, setShow] = useState(true);

//   function toggle() {
//     show ? setText('') : setText('Hello React');
//     show ? setButtonText('Show') : setButtonText('Hide');
//     setShow(!show);
//   }
//   return (
//     <div className='component-container'>
//       <h2>Practice 4 - Show Hide Text</h2>
//       <p className='text'>{text}</p>
//       <button className='show-hide-button' onClick={toggle}>
//         {buttonText}
//       </button>
//     </div>
//   );
// }

// refactor

export default function ShowHideText() {
  let text;
  let buttonText;
  const [show, setShow] = useState(true);

  if (show) {
    text = 'Hello There';
    buttonText = 'Hide';
  } else {
    text = '';
    buttonText = 'Show';
  }
  return (
    <div className='component-container'>
      <h2>Practice 4 - Show Hide Text</h2>
      <p className='text'>{text}</p>
      <button className='show-hide-button' onClick={() => setShow(!show)}>
        {buttonText}
      </button>
    </div>
  );
}
