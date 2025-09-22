// Interactive Scene
// Caleb Schwab
// 9/16/2025

let suncolor = 1 // var so it starts with yellow sun

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(50, 200-(mouseY/4), 255-(mouseY/4)); // background with mouseY so that change color with height
  clouds()
  sun()
  pyramid()
  noStroke()
}
function mousePressed() {
  if (mouseButton === LEFT && mouseIsPressed) { // check if mouse is pressed
    if (suncolor >= 3) { // To reset so that the colors go in a loop
      suncolor = 0
    }
   suncolor += 1
  }
}
function sun() {
  if (suncolor === 1) { // math so that each click will set to different color
    fill(225, 200, 0) // yellow
  }
  else if (suncolor === 2) {
    fill(225, 100, 0) // red
  }
  else{
    fill(255, 255, 255) // white
  }
  circle(mouseX, mouseY, 100)
}
 
function pyramid() {
  fill(400-(mouseX/2), 400-(mouseX/2), 125-(mouseX/4)) // color for left side pyramid, with mouse coords for color change
triangle((width/2), (height/2.5), 400, 600, 0, 600 )// left side
fill(50+(mouseX/2.5), 50+(mouseX/2.5), mouseX/4) // color for right side pyramid and similar math
triangle(width/2, height/2.5, 400, 600, 600, 600) // right side
}
function clouds() {
  fill(220, 220, 220) // Fills with a light grey
  circle(400, 125, 75) //Each Cloud
  circle(450, 150, 75)
  circle(500, 135, 75)
  circle(475, 100, 75)
  circle(425, 100, 75)

  circle(100, 150, 75) //Each Cloud
  circle(150, 175, 75)
  circle(200, 160, 75)
  circle(175, 125, 75)
  circle(125, 125, 75)
  
}