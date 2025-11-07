// Block Pusher Starter
// Caleb Schwab
// 11/07/25

tiles = []; // 0 -> Grass 1 -> Chicken  2 -> Cow  3 -> Star
let level = [
  [0,1,0,3,0],
  [1,0,0,1,0],
  [0,1,1,0,0],
  [0,1,0,0,0],
  [0,0,1,0,0]
]

let playerX = 3; let playerY = 4;
let rows = level.length;
let cols = level[0].length;
let tile_size = 100;

function setup() {
  createCanvas(tile_size*cols, tile_size*rows);
  loadAssets();
  level[playerY][playerX] = 2;
}

async function loadAssets(){
  // load our four (or more) tile images
  for(let i = 0; i < 4; i++){
    tiles.push(await loadImage("assets/"+i+".png"))
  }
}

function draw() {
  background(220);
  renderBoard();
  // keyPressed();
}

function swap(x1,y1,x2,y2){
  // modify the gameboard; switch two tiles
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2]; 
  level[y2][x2] = temp;
}

function renderBoard(){
  // interpret the data in the 2D array and place images on the canvas
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      let imgIndex = level[y][x];
      let currentImage = tiles[imgIndex];
      image(currentImage, x*tile_size, y*tile_size);
    }
  }
}

function keyPressed(){
  // enact a single action per keypress
  if(keyCode === LEFT_ARROW){
    if(playerX > 0){ // make sure not on left edge
      if(level[playerY][playerX-1] === 0){ // Grass
        swap(playerX, playerY, playerX - 1, playerY)
      playerX--;
      }
      else if(level[playerY][playerX-1] === 1){ // Chicken
        // check to see there is room for it to be pushed
        if(playerX > 1 && level[playerY][playerX-2] === 0){
          // swap grass and chicken
          //swap grass and chicken
          swap(playerX-1, playerY, playerX-2, playerY)
          swap(playerX, playerY, playerX-1, playerY)
          playerX--;
        }
      }
    }
  }
  if(keyCode === RIGHT_ARROW){
    swap(playerX, playerY, playerX + 1, playerY)
    playerX++;
  }
  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY - 1)
    playerY--;
  }
  if(keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY + 1)
    playerY++;
  }
}
