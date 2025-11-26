// Growing Trees
// Caleb Schwab
// 11/26/25

let angle = 20;
let gchange = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  angle = map(mouseX, 0, width, 0, 180);
  translate(width/2, height)
  branch(300,20);


}

function branch(len,g){
  let t = map(len,2, 300, 1, 20)
  strokeWeight(t);
  line(0,0,0,-len);
  translate(0,-len);
  stroke(100,g,20);

  if(len > 25){ // Only recursive case
    push();
    rotate(angle);
    branch(len*.67,g+gchange);
    pop();
    push();
    rotate(-angle);
    branch(len*.67,g+gchange);
    pop();
    push();
    rotate(-angle*2);
    branch(len*.67,g+gchange);
    pop();
    push();
    rotate(angle*2);
    branch(len*.67,g+gchange);
    pop();
  }
}