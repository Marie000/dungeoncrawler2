import Enemy from './enemy';

class Goblin extends Enemy {
  constructor() {
    super();
    this.strength = 30;
    this.health = 10;
    this.image = 'goblin.png';
  }
}

export default Goblin;