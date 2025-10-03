// Starter Code for our Terrain Generation Project
// Caleb Schwab
// 09/29/25

let rectWidth = 1;
let noiseTime = 0;
let noiseOff = 0.01;
let noiseStart = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for now generate the terrain once
  // generateTerrain();
  // frameRate(5);
}

function generateTerrain() {
// Use loop to generate and draw several rectangles side to side to look like 2D terrain.
rectMode(CORNERS);
let highY = 0;
let highX = 0;
let highestY = 0;

for(let x = 0; x < width; x += rectWidth){
  // generate a random height. !!NOTE!! change this from random() to noise()

  rectHeight = noise(noiseTime);
  rectHeight = map(rectHeight, 0, 1, height*0.1, height*0.9);

  // calculate the upper-right corner of rect
  let x2 = x + rectWidth;
  let y2 = height - rectHeight;
  fill(255)
  rect(x, height, x2, y2); // Draw the rectangle
  noiseTime += noiseOff; // change noiseTime each rectangle by noiseOff amount
  
  // Find the highest peak
  if(rectHeight > highestY){
    highestY = rectHeight;
    highX = x2;
    highY = y2;
    
  }
}
drawFlag(highX, highY);

  noiseStart += noiseOff;
  noiseTime = noiseStart;


rectMode(CORNER); // revert rectangle mode to default
}

function draw() {
  // Don't need to use draw UNTIL animating the terrain (panning)
  background(220);
  generateTerrain();
}

function keyPressed(){
  if(keyCode === 37){// left arrow to decrease rectWidth by one until it hits 5
    if(rectWidth > 1){
      rectWidth -= 1;
    }
  }
  if(keyCode === 39){
    if(rectWidth < 10){// right arrow to increase rectWidth by one until it hits 15
      rectWidth += 1;
    }
  }
}

function drawFlag(x,y){
  rectMode(CORNER);
  stroke(100, 100, 100); //line color grey
  line(x, y, x, y-40);
  fill(255, 0, 0); //Flag color red
  triangle(x, y-40, x, y-25, x+10, y-33)//draws triangle using the x, y but moves it to the proper location
  stroke(0);//resets stroke to black
}