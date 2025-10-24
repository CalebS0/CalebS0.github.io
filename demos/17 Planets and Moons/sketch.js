// Planets and Moons
// Caleb Schwab
// 10/17/25
// Objects within Objects

// GLOBAL VARIABLES
let myPlanet;
let starX;
let starY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2)
  for(i = 0; i < 50; i++){
    starX = random(width);
    starY = random(height);
    fill(255);
    circle(starX, starY, 5);
  }
}

function draw() {
  background(20);
  myPlanet.display();
}

function mousePressed(){
  // Regular click -> add a moon
  // Shift click -> destroy and reset a moon
  if(keyIsDown && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2)
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y  = mouseY;
  }
}


class Planet{
  // constructor
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }

  // class methods

  createMoon(){
    this.moons.push(new Moon(this.x,this.y));
  }
  display(){
    // draw the planets and all its moons
    fill(250, 70, 50)
    circle(this.x, this.y, this.s);

    // Moons
    for(let m of this.moons){
      m.update(this.x, this.y);
    }
  }
}

class Moon{
  // constructor
  constructor(){
    this.speed = random(1, 5);
    this.angle = 0; this.orbitRadius = random(80,250);
    this.s = random(5,50);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  display(x, y){
    fill(this.r, this.g, this.b);
    push();
    translate(x, y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  move(){
    this.angle += this.speed;
  }

  update(x,y){
    // Helper function to handle calling the class methods internally
    this.move();
    this.display(x,y);
  }
}