import User from './user';

class soldier extends User {
  constructor() {
    super('soldier', 50, 2, 17);
    this.image = 'soldier.png';
  }
}

export default soldier;