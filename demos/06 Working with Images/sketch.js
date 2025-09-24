// Working with Images and random() and noise()
// Caleb Schwqab
// 9/24/25

let x1, y1, x2, y2;
let d1, d2;
let noiseTime = 5, noiseSpeed = 0.01;
// noiseSpeed controls how connected our random noise() values are.
let minSize = 5; let maxSize = 200;

let mX, mY; //move x and y

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*.3; y1 = height*.5;
  x2 = width*.7; y2 = height*.5;
  mY = height*.3;
  //frameRate(10);
}

function noiseMove(){
  //use random noise to set the x position of a third circle
  fill(250, 150, 50);
  mX = noise(noiseTime);
  mX = map(mX, 0, 1, minSize, maxSize)
  circle(mX, mY, 50)
  noiseTime += noiseSpeed;
}

function draw() {
  background(220);
  randomCircle();
  noiseCircle();
  noiseMove();
}

function noiseCircle(){
  //draw a fixed  circle with randomly changing but smooth diameters
  d2 = noise(noiseTime); //yields value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize)
  fill(100, 50, 200);
  circle(x2,y2,d2)
  noiseTime += noiseSpeed;
}

function randomCircle(){
  //draw a fixed circle with randomly changing diameter
  fill(200, 50, 200);
  d1 = random(minSize, maxSize);
  circle(x1, y1, d1);
}