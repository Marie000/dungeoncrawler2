import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class Lose extends Component {

  render() {

    return (
      <div className="display">
        <h1>Dungeon Crawler</h1>
        <h2>You are dead!</h2>
        <img src="images/tombstone.png" className="endImage"/>
        <div clasName="newButton">
            <button onClick={this.props.newGame}>Play again!</button>
        </div>
      </div>
    );
  }
}

export default Lose;
