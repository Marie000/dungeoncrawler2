import Enemy from './enemy';

class Gargoyle extends Enemy {
  constructor() {
    super();
    this.strength = 60;
    this.health = 20;
    this.image = 'gargoyle.png';
  }
}

export default Gargoyle;