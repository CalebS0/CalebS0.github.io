// Starter Code for our Terrain Generation Project
// Caleb Schwab
// 09/29/25

let rectWidth = 5;
let noiseTime = 0;
let noiseOff = 0.001;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for now generate the terrain once
  // generateTerrain();
  frameRate(5);
}

function generateTerrain() {
// Use loop to generate and draw several rectangles side to side to look like 2D terrain.
rectMode(CORNERS);

for(let x = 0; x < width; x += rectWidth){
  // generate a random height. !!NOTE!! change this from random() to noise()

  rectHeight = noise(noiseTime);
  rectHeight = map(rectHeight, 0, 1, height*0.1, height*0.9);

  // calculate the upper-right corner of rect
  let x2 = x + rectWidth;
  let y2 = height - rectHeight;
  let highestX = 0;
  let highestY = 0;
  noStroke();
  fill(50, 150, 50);
  rect(x, height, x2, y2); // Draw the rectangle
  fill(100,75,25)
  rect(x, height, x2, y2+50)// Draw another set of rectangles 50 pixels lower for dirt
  noiseTime += noiseOff; // change noiseTime each rectangle by noiseOff amount
  
}
if(rectHeight > highestY){
  highestY = rectHeight;
  highestX = x2;
}
rect(highestX, highestY, highestX-10, highestY-20)

rectMode(CORNER); // revert rectangle mode to default
}

function draw() {
  // Don't need to use draw UNTIL animating the terrain (panning)
  background(220);
  generateTerrain();
}

function keyPressed(){
  if(keyCode === 37){// left arrow to decrease rectWidth by one until it hits 5
    if(rectWidth > 5){
      rectWidth -= 1;
    }
  }
  if(keyCode === 39){
    if(rectWidth < 15){// right arrow to increase rectWidth by one until it hits 15
      rectWidth += 1;
    }
  }
}