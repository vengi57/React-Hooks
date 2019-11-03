import React, { useState } from 'react';

function useTest(initialState){
  const [text,setText] = useState(initialState);
  return [text,setText]
}

function CustomHookState (){
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

export default CustomHookState;


