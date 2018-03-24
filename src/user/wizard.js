import User from './user';

class wizard extends User {
  constructor() {
    super('wizard', 0, 1, 12);
    this.image = 'wizard.png';
  }
}

export default wizard;