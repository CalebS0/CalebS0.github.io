// Project Title
// Your Name
// 10/08/25

let d = 150

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawWheel(d);
}


function drawWheel(d) {
  push();
  translate(200,200);
  angleMode(DEGREES);
  for(let i = 0; i < 4; i++){
    line(0, 0, d/2, 0);
    rotate(90)
  }
  angleMode(RADIANS);
  rotate(frameCount/20);
  // line(0, 0, d/2, 0);
  // line(0, 0, 0, d/2);
  // line(0, 0, d/-2, 0);
  // line(0, 0, 0, d/-2);
  noFill(0);
  circle(0,0,d);




  pop();

}