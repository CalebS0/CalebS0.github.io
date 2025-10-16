// Object-Object Interactions
// Caleb Schwab
// 10/16/25

//GLOBAL VARIABLES
let nodes = [];
let reach = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  // create one node per mousePress
  for(let i = 0; i < 100; i++){
    nodes.push(new csNode(mouseX, mouseY));
  }
}

function draw() {
  background(0);
  for(let n of nodes){
    n.move();
    // n.display();
    n.connect(nodes);
  }
}

class csNode{
  // constructor
  constructor(x, y){
    // properties related to position/display
    this.x = x; this.y = y; this.size = 20;
    this.c = color(random(0, 255),random(0, 50),random(0, 255))

    // properties related to movement
    this.xTime = random(10); this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 20;
  }
  // class methods
  display(){ // draw our csNode as a circle on canvas
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){
    // use perlin noise for x/y movement
    let xSpeed = noise(this.xTime); // 0-1
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0) this.x = width;
    else if(this.x > width) this.x = 0;

    // ------ now the same for Y -------
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y < 0) this.y = height;
    else if(this.y > height) this.y = 0;
  }

  connect(nodeArray){
    // check if the current point is close to any other points. If so, join them with a line.
    stroke(this.c);
    for(let n of nodeArray){
      //this.x  this.y    n.x n.y
      if(n !== this){// make sure not to compare to self
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){//two points are close
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }
}