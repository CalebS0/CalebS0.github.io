// Drawing with Single Loops
// Caleb Schwab
// 09/23/25


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  circleLine(height/2, 50);
  circleLine(height*.35, 30);
  circleLine(height*.65, 80);
}

function gradientBackground(){
  //create a gradient to use as a background
  let h = 1; // height of each rectangle

  //Use a loop (doesnt have to be a WHILE) to draw a vertical stack of rectangles
  let y = 0;
  while (y <= height){
    noStroke();
    let mappedY = map(y,0,height,0,255);
    let flippedY = 255 - mappedY;
    let mappedMouseX = map(mouseX, 0, width, 0,255);
    let mappedMouseY = map(mouseY, 0, height, 0,255);
    fill(mappedMouseY, flippedY, mappedMouseX);
    rect(0, y, width, h);
    y += h;
  }
}

function cDistance(x1, y1, x2, y2){
  //calculate the straightline distance between (x1, y1) and (x2, y2)
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return c.toFixed(1); //keep only 1 decimal place
}

function circleLine(y, size){
  //use this function to draw a line of circles (loop)
  // y -> number  the height at which to draw the line
  // size -> number diameter of the circles
  let xStart = width*.1; // 10% position from the left
  let xEnd = width *.9; // 90% horizontal position from the left

  for(let x = xStart; x <= xEnd; x += size) {
    let d = cDistance(x,y, mouseX, mouseY);
    if(d <= size/2){ // distance less than radius (in circle)
      fill(200, 200, 0);
    }
    else fill(255);
    circle(x, y, size);
    textAlign(CENTER, CENTER) // center align text in circlea
    fill(0)
    text(d, x, y);
  }
}