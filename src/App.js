import React, { Component } from 'react';
import mapCreator from './map/map_generator';
import fillMap from './map/map_filler';
import getLevelInfo from './utils/getLevelInfo';
import getUserPosition from './map/get_user_position';
import './App.css';
import Grid from './Grid';
import PreGame from './PreGame';
import Win from './Win';
import Lose from './Lose';
import Header from './Header';

import princess from './user/princess';
import soldier from './user/soldier';
import wizard from './user/wizard';
import Enemy from './enemies/enemy';
import Dragon from './enemies/dragon';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      battle: false,
      level: 1,
      levelInfo: getLevelInfo(1),
      stage:'before',
      userPosition: [0, 0], // row, col
      currentEnemy: {},
      finalBattle: false,
    }
  }

  createMap(character) {
    if (character) {
      this.setState({character: character});
    }
    // create 30 by 30 map
    var newMap = mapCreator(30, 30);
    newMap = fillMap(newMap,
                     this.state.levelInfo.potions,
                     this.state.levelInfo.enemies,
                     this.state.levelInfo.boss,
                     this.state.levelInfo.portal,
                     character ? character : this.state.character);
    
    this.setState({map: newMap, userPosition: getUserPosition(newMap), stage: 'game'});

  }

  newGame() {
    this.setState({
        character: {},
        battle: false,
        level: 1,
        levelInfo: getLevelInfo(1),
        stage:'before',
        userPosition: [0, 0] // row, col
      })
  }

  componentDidMount() {
    document.body.addEventListener('keydown',(e) => {
      switch(e.keyCode){
        case 38:
        this.move('up')
        break;
    
        case 40:
        this.move('down')
        break;

        case 37:
        this.move('left')
        break;

        case 39:
        this.move('right')
        break;
      }
    })
  }

  chooseCharacter(character) {
    let newCharacter;
    switch(character) {
      case 'princess':
      newCharacter = new princess();
      break;

      case 'soldier':
      newCharacter = new soldier();
      break;

      case 'wizard':
      newCharacter = new wizard();
      break;
    }
    this.createMap(newCharacter);
  }

  move(direction) {
    let targetRow, targetCol;
    let currentRow = this.state.userPosition[0];
    let currentCol = this.state.userPosition[1];
    if(direction === "up"){
      targetRow = currentRow - 1;
      targetCol = currentCol;
    }
    if(direction === "down"){
        targetRow = currentRow + 1;
        targetCol = currentCol; 
    }
    if(direction === "left"){
        targetRow = currentRow;
        targetCol = currentCol - 1;           
    }
    if(direction === "right"){
        targetRow = currentRow;
        targetCol = currentCol + 1;
    }

    if (!this.state.map[targetRow] || !this.state.map[targetCol]){
      return;
    }
    let targetType = this.state.map[targetRow][targetCol];
    let character = this.state.character;
    switch(targetType) {
      case 1:
      this.moveUserTo([targetRow, targetCol], character);
      break;

      case 3: // potion
      character.gainHealth(50);
      this.setState({character: character});
      this.moveUserTo([targetRow, targetCol], character);
      break;

      case 4: // weapon
      character.getWeapon(this.state.level);
      this.setState({character: character});
      this.moveUserTo([targetRow, targetCol], character);
      break;

      case 5: // portal
      let newLevel = this.state.level + 1;
      let newLevelInfo = getLevelInfo(newLevel);
      console.log(newLevelInfo)
      let newMap = mapCreator(30, 30);
      newMap = fillMap(newMap,
                       newLevelInfo.potions,
                       newLevelInfo.enemies,
                       newLevelInfo.boss,
                       newLevelInfo.portal,
                      this.state.character);
      this.setState({level: newLevel,
                     levelInfo: newLevelInfo, 
                     map: newMap, 
                     userPosition: getUserPosition(newMap)});

    }
    if (targetType instanceof Enemy) {
      if (targetType instanceof Dragon) {
        this.setState({finalBattle: true, currentEnemy: targetType})
      } else {
        this.setState({battle: true, currentEnemy: targetType});
      }
      let enemyDamage = Math.floor(Math.random() * (this.state.character.strength + 1) / 2);
      let playerDamage = Math.floor(Math.random() * (targetType.strength + 1) / 2);
      let player = this.state.character;
      player.loseHealth(playerDamage);
      this.setState({character: player});
      targetType.loseHealth(enemyDamage);
      if (!player.alive) {
        this.setState({stage: 'lose'});
      }
      if (!targetType.alive) {
        if (targetType instanceof Dragon) {
          this.setState({stage: 'win'});
        }
        this.state.character.gainExperience(10);
        this.moveUserTo([targetRow, targetCol], character);
      }
    }
  }

  moveUserTo(newPosition, character) {
    // [row, col]
    let oldPosition = this.state.userPosition;
    let map = this.state.map;
    map[oldPosition[0]].splice(oldPosition[1], 1, 1);
    map[newPosition[0]].splice(newPosition[1], 1, character);
    this.setState({userPosition: newPosition, map: map, battle: false, finalBattle:false, currentEnemy: {}})
  }

  render() {
    let display;
    switch (this.state.stage) {
      case 'before':
      display = <PreGame chooseCharacter = {this.chooseCharacter.bind(this)} />
      break;

      case 'game':
      display = <div>
        <Header level = {this.state.level}
                character = {this.state.character}
                battle = {this.state.battle}
                finalBattle = {this.state.finalBattle}
                enemy = {this.state.currentEnemy} />
        <Grid grid = {this.state.map}
              level = {this.state.level}
              userPosition = {this.state.userPosition} />
        </div>
      break;

      case 'win': 
      display = <div>
        <Win newGame = {this.newGame.bind(this)} />
        </div>
      break;

      case 'lose':
      display = <Lose newGame = {this.newGame.bind(this)} />
      break;

      default:
      display = <div>Display Error!</div>
      break;
    }

    return (
      <div className="App">
        {display}      
      </div>
    );
  }
}

export default App;
