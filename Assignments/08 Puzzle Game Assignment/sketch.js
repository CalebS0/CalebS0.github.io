// Puzzle Game Assignment
// Caleb Schwab
// 11/4/25

let grid = [
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0,0]
];

let rows = grid.length;
let cols = grid[0].length;

let squareSize = 100;

function setup() {
  createCanvas(squareSize*cols, squareSize*rows);
  randomColor();
}

function randomColor(){
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x ++){
      grid[y][x] = floor(random(2))*255; // Create Grid
    }
  }
}

function draw() {
  background(220);
  renderGrid();
  print(getCurrentX(), getCurrentY())
  win();
}

function mousePressed(){
  // flip current tile - upgrade: only do this if the mouse is on Canvas
  let x = getCurrentX();
  let y = getCurrentY();
  if(mouseX <= width && mouseY <= height){
    if(keyIsDown(SHIFT) === false){
      // ALWAYS; flip the "focused" tile
      flip(x,y);

      // IF THEY EXIST:
      // flip our NSEW neighbours (cross pattern)
      if(x+1 < cols) flip(x+1, y);
      if(x-1 >= 0) flip(x-1,y);
      if(y-1 >= 0) flip(x,y-1);
      if(y+1 < rows) flip(x, y+1);
    }
    else flip(x,y);
  }
}
function getCurrentX(){
  // determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX/squareSize);
}

function getCurrentY(){
  // determine current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY/squareSize);
}

function flip(x,y){
  // takes a tile @ x,y and inverts its value
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function renderGrid(){
// interpret the information in the 2D array, and draw a grid of square on the screen to reflect it
for(let y = 0; y < rows; y++){
  for(let x = 0; x < cols; x++){
    let fillColor = grid[y][x];
    fill(fillColor);
    square(squareSize*x, squareSize*y, squareSize);
    }
  }
}
function win(){
  let gridColor = grid[0][0];
  for(let y = 0; y < rows; y++){
    for(let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      if(gridColor !== fillColor){
        return;
      }
      if(gridColor === 0){
        fill(255);
      }
      else fill(0);
    }
  }

  textSize(30);
  text("YOU WIN!", width/2, height/2);
}
