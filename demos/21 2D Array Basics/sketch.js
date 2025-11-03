// 2D Array Basics
// Caleb Schwab
// 11/03/25

// 0 (black) 255 (white)
// grid i s 5 x 4 in dimension

 let grid = [
  [0  , 0  , 0  , 255, 0  ],
  [255, 0  , 255, 0  , 255],
  [255, 255, 0  , 255, 255],
  [0  , 255, 0  , 0  , 0  ],
  [0  , 255, 0  , 0  , 0  ]
 ];

 let rows = grid.length;
 let cols = grid[0].length;

 let squareSize = 60;

function setup() {
  createCanvas(squareSize*cols, squareSize*rows);
}

function draw() {
  background(220);
  renderGrid();
  print(getCurrentX(), getCurrentY())
}

function mousePressed(){
  // flip current tile - upgrade: only do this if the mouse is on Canvas
  let x = getCurrentX();
  let y = getCurrentY();
  if(mouseX <= width && mouseY <= height){
    // ALWAYS; flip the "focused" tile
    flip(x,y);
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
  // takes a til @ x,y and inverts its value
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