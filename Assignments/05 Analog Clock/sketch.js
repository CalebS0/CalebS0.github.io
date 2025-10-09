// Analog Clock
// Caleb Schwab
// 10/09/25

let d = 300

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawClock();
}

function drawClock(){
  push();
  translate(300,300);
  angleMode(DEGREES);
  strokeWeight(3);// thickness of lines
  // 12 lines for hours
  for(let i = 0; i < 12; i++){
    line(d/2-15,0, d/2-5, 0);
    rotate(30);
  }
  strokeWeight(1);
  // 60 lines for minutes
  for(let i = 0; i < 60; i++){
    line(d/2-15,0, d/2-5, 0);
    rotate(6);
  }
  
  // angleMode(RADIANS);
  // Hour Hand
  rotate(frameCount/3600);
  line(0,0,0, -d/2+40);
  // Minute Hand
  rotate(frameCount/720);
  line(0,0,0, -d/2+20);
  // Second Hand
  rotate(frameCount/10);
  stroke(255,0,0);
  line(0,0,0, -d/2+10);
  stroke(0);
  // Outside Circle
  noFill(0);
  circle(0,0,d);
  pop();
}