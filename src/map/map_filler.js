import Goblin from '../enemies/goblin';
import Barbarian from '../enemies/barbarian';
import Gargoyle from '../enemies/gargoyle';
import Dragon from '../enemies/dragon';

const fillMap = function(map, potions, enemies, boss, portal, user) {
  let width = map[0].length;
  let height = map.length;
  // now we need to add the player, enemies, etc.
  // first we create a list of open spots
  let openSpots = [];
  for (let col = 0; col < width; col++){
    for (let row = 0; row < height; row++){
      if (map[row][col] === 1) {
        openSpots.push([row,col]);
      }
    }
  }
  //choose random open spot, assign it a new value and remove it from list
  const chooseOpenSpot = function(newValue) {
    var random = Math.floor(Math.random() * openSpots.length);
    var newRow = openSpots[random][0];
    var newCol = openSpots[random][1];
    map[newRow].splice(newCol, 1, newValue);
    openSpots.splice(random, 1);
  }

  //set up player starting point
  chooseOpenSpot(user);

  //set up potions
  for (let x = 0; x < potions; x++){
    chooseOpenSpot(3);
  }
  //set up weapon
  chooseOpenSpot(4);

  //set up enemies
  for (var x = 0; x < enemies.number; x++){
    switch(enemies.type) {
      case 'goblin':
      chooseOpenSpot(new Goblin());
      break;

      case 'barbarian':
      chooseOpenSpot(new Barbarian());
      break;

      case 'gargoyle':
      chooseOpenSpot(new Gargoyle());
      break;
    }
  }       
  //set up portal level 1 and 2
  if (portal) {
    chooseOpenSpot(5);
  }
  //set up big boss level 3
  if (boss) {
    chooseOpenSpot(new Dragon());
  }

  return map;
};

export default fillMap;