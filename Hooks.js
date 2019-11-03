import React, { useState } from 'react';

function Hooks (){

  const [text,setText] = useState('Login');
  function buttonClick()
  {
    setText('Logout');
  }
    return (
      <div className="App">
       <button onClick={buttonClick}>{text}</button>
        
      </div>
    );
}

export default Hooks;


