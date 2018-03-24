const getLevelInfo = function(level) {
  let info = {
    potions: undefined,
    enemies: undefined,
    boss: undefined,
    portal: undefined
  }
  switch(level) {
    case 1: 
    info.potions = 8;
    info.enemies = {number: 8, type: 'goblin'};
    info.boss = false;
    info.portal = true;
    break;

    case 2:
    info.potions = 7;
    info.enemies = {number: 10, type: 'barbarian'};
    info.boss = false;
    info.portal = true;
    break;

    case 3:
    info.potions = 6;
    info.enemies = {number: 12, type: 'gargoyle'};
    info.boss = true;
    info.portal = false;
  }
  return info;
}

export default getLevelInfo;