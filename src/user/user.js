
export default class User {
  constructor(type, experience, level, strength) {

    this.health = 100;
    this.type = type;
    this.experience = experience;
    this.strength = strength;
    this.level = level;
    this.weapon = 'knife';
    this.maxHealth = 100;
    this.image;
    this.alive = true;
  }

  gainHealth(points) {
    this.health += points;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
  }

  loseHealth(points) {
    this.health -= points;
    if (this.health <= 0) {
      this.die()
    }
  }

  getWeapon(level) {
    switch(level) {
      case 1:
      this.weapon = 'sword';
      break;

      case 2: 
      this.weapon = 'mace';
      break;

      case 3: 
      this.weapon = 'axe';
      break;
    }
    this.strength = this.type === 'wizard' ? this.strength + 8 : this.strength + 5;
  }

  gainExperience(points) {
    this.experience += points;
    let newLevel = Math.floor(this.experience / 50) + 1;
    if (newLevel !== this.level) {
      this.level = newLevel;
    }
  }

  die() {
    this.alive = false;
  }

}

