import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class Win extends Component {

  render() {

    return (
      <div className="display">
      <h1>Dungeon Crawler</h1>
      <h2>You win!</h2>
      <img src="images/treasure_chest_001.png" className="endImage" />
      <div className="newButton">
          <button onClick={this.props.newGame.bind(this)}>Play again!</button>
      </div>
  </div>
    );
  }
}

export default Win;
