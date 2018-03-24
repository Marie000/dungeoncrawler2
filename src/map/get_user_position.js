import User from '../user/user';

const getUserPosition = function(map) {
  for (let col = 0; col < map.length; col++) {
    for (let row=0; row < map[0].length; row++) {
      if (map[row][col] instanceof User){
        console.log('found!!!')
          return [row, col];
      }
    }
  }
}

export default getUserPosition;