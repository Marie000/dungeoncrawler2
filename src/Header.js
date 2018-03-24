import React, { Component } from 'react';
import './App.css';
import Health from './Health';
import Level from './Level';
import Weapon from './Weapon';

class Header extends Component {

  render() {
    return (
      <div className="header">
      <h1>Dungeon Crawler</h1>
        <h2>Dungeon Level {this.props.level}</h2>
        Health: <Health health = {this.props.character.health} type = "character" />
      <span className="enemyHealth">
      {this.props.battle ? <span>Enemy Health:
        <Health health = {this.props.enemy.health}  
                type = 'enemy'/> 
                </span>
        : ''}
      {this.props.finalBattle ? <span>Dragon Health:
        <Health health = {this.props.enemy.health}  
                type = 'dragon' />
                </span>
        : ''}
      </span> <br />
      Player Level: <Level level={this.props.character.level} />
      <div className = 'weapon'>
      Weapon: <Weapon weapon={this.props.character.weapon} character={this.props.character.type}/>
      </div>
      <br />

  </div>
    );
  }
}

//
      

export default Header;
