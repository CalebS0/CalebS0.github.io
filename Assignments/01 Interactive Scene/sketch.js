// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let skyred = 50
let skygreen = 200
let skyblue = 255
let suncolor = 1

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(50, 200-(mouseY/4), 255-(mouseY/4));
  clouds()
  sun()
  pyramid()
  noStroke()
}
function mousePressed() {
  if (mouseButton === LEFT && mouseIsPressed) {
    if (suncolor >= 3) {
      suncolor = 1
    }
   suncolor += 1
  }
}
function sun() {
  if (suncolor === 1) {
    fill(225, 200, 0)
  }
  else if (suncolor === 2) {
    fill(225, 100, 0)
  }
  circle(mouseX, mouseY, 100)
}
 
function pyramid() {
  fill(400-(mouseX/2), 400-(mouseX/2), 125-(mouseX/4))
triangle((width/2), (height/2.5), 400, 600, 0, 600 )
fill(50+(mouseX/2.5), 50+(mouseX/2.5), mouseX/4)
triangle(width/2, height/2.5, 400, 600, 600, 600)
}
function clouds() {
  fill("white")
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