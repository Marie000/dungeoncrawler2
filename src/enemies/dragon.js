import Enemy from './enemy';

class Dragon extends Enemy {
  constructor() {
    super();
    this.strength = 140;
    this.health = 30;
    this.image = 'dragon_1.png';
  }
}

export default Dragon;