import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Hooks from './Hooks';
import CustomHookState from './CustomHookState';
import './style.css';

class App  extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      text:'Login',
      content:'Press the Button'
    };
  }
  buttonClick=()=>
  {
     this.setState({
       text:'Logout'
     });
  }
  logoutButton=()=>
  {
    this.setState(state({
      isLoggedOut:!state.isLoggedOut
    }));
  }
  render() {
     let {isLoggedIn,text,content} = this.state;
    
    return (
      <div className="App">
      <Hello content={content}/>
        {isLoggedIn?<button onClick={this.buttonClick}>{text}</button>:"Text"}
        <Hooks/>
        <CustomHookState/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
