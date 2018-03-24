import User from './user';

class princess extends User {
  constructor() {
    super('princess', 0, 1, 12);
    this.maxHealth = 120;
    this.image = 'princess_attack_003.png';
  }

  loseHealth(points) {
    this.health -= (points / 2);
    if (this.health <= 0) {
      this.die()
    }
  }

  gainHealth(points) {
    this.health += (points + 20);
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
  }
}

export default princess;