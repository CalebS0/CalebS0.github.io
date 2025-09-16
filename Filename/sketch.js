// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let HeadSize = 70

 function setup() {
   createCanvas(windowWidth, windowHeight);
 }

// function draw() {
// background(220);
//   //checkmulti( );
// }

// function checkmulti(){
//   strokeWeight(mouseX / 10);
//   stroke(255,0,0);
//   //Check for multiple key presses (3 Simultaneous)
//   let a = keyIsDown(65); //"a"
//   let b = keyIsDown(66); //"b"
//   let c = keyIsDown(67); //"c"
//   textSize( 40);
//   text("a:" + a + "\tb:" + b + "\tc:" + c, 100, 300);
// }

function draw() {
background(220)
shape()
}

function shape(){
  noStroke()
  fill(150,225,150)
  circle(width/2, height/2, HeadSize)
  rect((width-70)/2, (height)/2, HeadSize, 45)
  rect((width/2)-(HeadSize/2), (height/2)-(HeadSize/10), HeadSize/10, 70)
  rect((width/2)+(HeadSize/2)-7, (height/2)-(HeadSize/10), HeadSize/10, 70)
}