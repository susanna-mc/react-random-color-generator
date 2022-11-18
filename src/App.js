import { useState } from 'react';
import './App.css';
import randomColor from 'randomColor';

function App() {
  const [randomColor, setColor] = useState(''); //What is happening here? Why is inside of square brackets greyed out?
  return (
    <div>
      <br />
      <h1
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          width: 400,
          height: 400,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '75',
        }}
      >
        ***placeholder***
      </div>
      <button
        style={{
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
