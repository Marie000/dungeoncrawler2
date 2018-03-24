import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class PreGame extends Component {

  render() {

    return (
      <div className="pregame">
    <h1>Dungeon Crawler</h1>
        <div className="button">
            <h2>Please choose your character wisely</h2>
            <div className="characterChoice">
                <h3>Princess</h3>
                    <img src="images/princess_attack_003.png" />
                       <p>Higher maximum health<br/>
                        Less health damage from enemies<br/>
                        Potions more effective</p>
                     <button onClick={this.props.chooseCharacter.bind(this, 'princess')}>Choose Princess</button>
            </div>
            <div className="characterChoice">
                <h3>Soldier</h3>
                    <img src="images/soldier.png" />
                        <p>Starts at player level 2</p>
                    
                     <button onClick={this.props.chooseCharacter.bind(this, 'soldier')}>Choose Soldier</button>
            </div>
            <div className="characterChoice">
                <h3>Wizard</h3>
                    <img src="images/wizard.png" />
                        <p>All weapons are magic (extra damage)</p>
                    <button onClick={this.props.chooseCharacter.bind(this, 'wizard')}>Choose Wizard</button>
            </div>
            <p>Most graphics by Julia McCarthy (<a href="http://opengameart.org/users/mobile-game-graphics">Mobile Game Graphics</a>)</p>
            <p>Additional graphic by <a href="http://calciumtrice.tumblr.com/">Calciumtrice</a></p>
    </div>      </div>
    );
  }
}

export default PreGame;
