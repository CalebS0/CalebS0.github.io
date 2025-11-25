// Recursive Imagery
// Caleb Schwab
// 11/25/25


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function centerCircle(x,y,d){
  // Recursively draw concentric circle
  // Base Case... implicit
  if(d > 10){
    // Recursive case
    circle(x,y,d);
    centerCircle(x,y,d*0.99);
  }

  // if we skip the recursive case, we unravel one level... base case
}

function circleFractal(x,y,d){
  if(d > 2){
    circle(x,y,d);
    circleFractal(x-d/2, y, d/2)
    circleFractal(x+d/2, y, d/2)
    circleFractal(x, y-d/2, d/2)
    // circleFractal(x, y+d/2, d/2)
    // circleFractal(x-d/2, y-d/2, d/2)
    // circleFractal(x+d/2, y-d/2, d/2)
    // circleFractal(x+d/2, y+d/2, d/2)
    // circleFractal(x-d/2, y+d/2, d/2)
  }
}

function setFill(x,y,s){
  if(dist(mouseX,mouseY,x,y,) <s/2){
    // fill(255,0,0)
    strokeWeight(5)
  }
  else strokeWeight(1);
}

function luckySquare(x,y,s){
  if(s > 10){
    fill(255,0,0,50);
    push();
    let r = map(x,0,width,0,255);
    let g = map(y,0,height,0,255);
    let b = map(y,0,width,255,0);
    stroke(r,g,b);
    translate(x,y);
    rotate(radians(frameCount));
    setFill(x,y,s);
    square(0,0,s);
    pop();
    luckySquare(x-s/2, y+s/2, s*.5);
    luckySquare(x-s/2, y-s/2, s*.5);
    luckySquare(x+s/2, y+s/2, s*.5);
    luckySquare(x+s/2, y-s/2, s*.5);
  }
}

function draw() {
  rectMode(CENTER);
  noFill()
  background(0);
  stroke(255);
  // centerCircle(width/2, height/2, width)
  // circleFractal(width/2, height/2, width/2)
  luckySquare(width/2, height/2, width/2);
}
