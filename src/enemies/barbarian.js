import Enemy from './enemy';

class Barbarian extends Enemy {
  constructor() {
    super();
    this.strength = 45;
    this.health = 15;
    this.image = 'barbarian.png';
  }
}

export default Barbarian;