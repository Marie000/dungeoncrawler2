import React, { Component } from 'react';
import './App.css';

class Level extends Component {

  render() {
    let stars = [];
    for (var i = 0; i < this.props.level; i++) {
      stars.push(			<img src='images/star.png' /> )
    }
    
    return (
      <span className='level'>
      {stars}
      </span>
    );
  }
}

export default Level;