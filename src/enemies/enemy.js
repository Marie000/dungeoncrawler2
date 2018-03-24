
export default class Enemy {
  constructor() {
    this.strength;
    this.health;
    this.alive = true;
  }

  gainHealth(points) {
    this.health += points;
  }

  loseHealth(points) {
    this.health -= points;
    if (this.health <= 0) {
      this.die()
    }
  }

  die() {
    this.alive = false;
  }

}