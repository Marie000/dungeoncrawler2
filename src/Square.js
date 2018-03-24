import React, { Component } from 'react';
import Enemy from './enemies/enemy';
import Dragon from './enemies/dragon';
import User from './user/user';
import './App.css';

class Square extends Component {
  render() {
    let backgroundColor = 'tan';
    let backgroundImage;
    if (this.props.visibility) {
    switch(this.props.value) {
      case 0:
      backgroundColor = 'black';
      backgroundImage = "url(images/wall.png)";
      break;

      case 3:
      backgroundImage = "url(images/potion_blue.png)"
      break;
      
      case 4: 
      switch(this.props.level){
				case 1:
				backgroundImage = "url(images/sword.png)"
				break;

				case 2:
				backgroundImage = "url(images/mace.png)"
				break;

				case 3:
				backgroundImage = "url(images/axe.png)"
        break;
      }
      break;

      case 5:
      backgroundImage = "url(images/door.png)";
      break;

    }
    if (this.props.value instanceof User) {
      backgroundImage = 'url(images/' + this.props.value.image + ')';
    } else if (this.props.value instanceof Enemy) {
      backgroundImage = 'url(images/' + this.props.value.image + ')';
    } 
  }
  else {
    backgroundColor = 'black';
  }
    let mystyle={
			//backgroundImage:backgroundImage,
      backgroundColor:backgroundColor,
      backgroundImage: backgroundImage,
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			width:'40px',
			height:'40px',
			display: 'inline-block',
    }
    return (
      <div className="square" style = {mystyle}>
      </div>
    );
  }
}

export default Square;
