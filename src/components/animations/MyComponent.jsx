import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './MyComponent.css';

const MyComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Fade</button>
      <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
        <div className="fade-box">I fade in and out!</div>
      </CSSTransition>
    </div>
  );
};

export default MyComponent;


