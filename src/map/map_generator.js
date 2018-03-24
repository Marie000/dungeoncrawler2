

const mapCreator = function(width, height) {
  // creating an empty map
  let array = [];
  for (var i = 0; i < height; i++) {
    array[i] = [];
    for (var j = 0; j < width; j++) {
        array[i][j] = 0
    }
  }

  // list containing one point for each room successfully created
  // will be used to create hallways between rooms and to keep track of the number of rooms.
  let randomPoints = [];

  // createRoom is used to attempt to create a room
  const createRoom = function() {
    let roomHeight = Math.floor(Math.random() * 10) + 5;
    let roomWidth = Math.floor(Math.random() * 10) + 5;
    let startRow = Math.floor(Math.random() * (height - roomHeight + 1)) + 1;
    let startCol = Math.floor(Math.random() * (width - roomWidth + 1)) + 1;
   //check if spot is available (if not, nothing happens)
    let spotAvailable = true;
    for (let row = startRow; row < startRow + roomHeight; row++){
      for (let col = startCol; col < startCol + roomWidth; col++){
        // leave a wall all around
        if (row === 0 || row === height - 1 || col === 0 || col === width - 1) {
          spotAvailable = false;
          break;
        }
        if(array[row] && (array[row][col] === 1 || array[row][col] === undefined)) {
          spotAvailable = false;
          break;
        }
      }
    }
    //if the spot is available, create the room
    if (spotAvailable) {
      // create the room: 
      for (let row = startRow; row < startRow + roomHeight; row++) {
        if(array[row]){
          for (let col = startCol; col < startCol + roomWidth; col++) {
            array[row].splice(col, 1, 1);
          }
        }
      }
      // save a random point from the room
      let point = []
      point[0] = Math.floor(Math.random() * (startRow + roomHeight - startRow) + startRow - 1);
      point[1] = Math.floor(Math.random() * (startCol + roomWidth - startCol) + startCol - 1);
      randomPoints.push(point)
    }
  }

  let tryCreateRoom = function(numberOfAttempts) {
    for (var i = 0; i < numberOfAttempts; i ++ ) {
      createRoom();
    }
  }

  tryCreateRoom(100);

  // making sure we have at least 3 rooms
  while(randomPoints.length < 3) {
    tryCreateRoom(10);
  }
  // now that we have rooms, create hallways between the randomPoints
  const createHallways = function() {
    // use first two points as beginning and end of the hallway
    let beginCol = randomPoints[0][1];
    let endCol = randomPoints[1][1];
    let beginRow = randomPoints[0][0];
    let endRow = randomPoints[1][0];
    // create hallway
    if (beginCol < endCol) {
      for (let col = beginCol; col < endCol + 1; col++) {
        array[beginRow].splice(col, 1, 1);
      }
    } else {
      for (let col = beginCol; col > endCol; col --) {
        array[beginRow].splice(col, 1, 1);
      }
    }

    if (beginRow < endRow) {
      for (let row = beginRow; row < endRow + 1; row++) {
        array[row].splice(endCol, 1, 1);
      }
    } else {
      for (let row = beginRow; row > endRow; row --) {
        array[row].splice(endCol, 1, 1);
      }
    }



    

    


    //remove first point from list, repeat function until one point left
    randomPoints.splice(0, 1)
    if (randomPoints.length > 1){
      createHallways();
    }
  }
  createHallways();

  return array;

}

export default mapCreator;
