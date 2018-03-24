import React, { Component } from 'react';
import './App.css';

class Weapon extends Component {
  getWeapon() {
    switch(this.props.weapon){
      case 'knife':
      return<span>
      Tiny Knife of Skin Scratching <img src='images/knife_bronze.png' /> 
      </span>				
      break;

      case 'sword':
      return<span>
      Shiny Sword of Stabbing
      <img src='images/sword.png' /> 
      </span>
      break;

      case 'mace':
      return<span>
      Large Mace of Skull Crushing <img src='images/mace.png' /> 
      </span>
      break;

      case 'axe':
      return<span className="weapon">
      Awesome Axe of Decapitation <img src='images/axe.png' /> 
      </span>
      break;
    }
  }

  render() {
    if (this.props.character === 'wizard') {
      return <span>Magic {this.getWeapon.call(this)}</span>
    } else {
      return <span>{this.getWeapon.call(this)}</span>
    }
  }
}

export default Weapon;