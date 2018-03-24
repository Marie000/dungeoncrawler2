import React, { Component } from 'react';
import './App.css';

class Health extends Component {

  render() {
    let numberOfHearths = 0;
    if (this.props.type === 'character') {
      let remainder = this.props.health % 20;
      let wholeHearths = (this.props.health - remainder) / 20;
      numberOfHearths = remainder > 0 ? wholeHearths * 2 + 1 : wholeHearths * 2;

    } else if (this.props.type === 'enemy' || this.props.type === 'dragon') {
      let remainder = this.props.health % 4;
      let wholeHearths = (this.props.health - remainder) / 4;
      numberOfHearths = remainder > 2 ? wholeHearths * 2 + 1 : wholeHearths * 2;
    }
    let hearts = [];
  
    for (var i = 0; i < Math.floor(numberOfHearths / 2); i++) {
      hearts.push(<img src='images/heart_full.png' />)
    }
    if (numberOfHearths % 2 === 1) {
      hearts.push(<img src='images/heart_half.png' />)
    }
    
    return (
      <span className='health'>
      {hearts}
      </span>
    );
  }
}

export default Health;
