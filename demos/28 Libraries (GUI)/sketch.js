// Libraries (GUI)
// Caleb Schwab
// 11/27/25

let d = 100;
let gui;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  s = createSlider("Diameter", width/2, height*.8, 128, 32, 40, 400);
}

function draw() {
  background(220);
  circle(width/2, height/2, s.val);
  drawGui();
}
