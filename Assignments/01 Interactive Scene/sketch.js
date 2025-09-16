// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(600,600);
}

function draw() {
  background(50, 200, 255);
  sun()
  mountains()
}

function sun() {
  fill(255, 200, 0)
  circle(mouseX, mouseY, 100)
}
 
function mountains() {
  fill(220, 220, 100)
triangle((width/2), (height/2.5), 400, 600, 0, 600 )
fill(mouseX/1.5, mouseX/1.5, mouseX/4)
triangle(width/2, height/2.5, 400, 600, 600, 600)
}