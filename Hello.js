import React, { Component } from 'react';

class Hello extends Component
{
    render()
    {
      return(
        <h1>{this.props.content}</h1>
      );
    }
}

export default Hello;