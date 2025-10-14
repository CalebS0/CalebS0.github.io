// Create Your First Class
// Caleb Schwab
// 10/14/25

let myRoundRacer1;
let myRoundRacer2;
let myRoundRacer3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myRoundRacer1 = new RoundRacer(windowHeight*0.25, 150)
  myRoundRacer2 = new RoundRacer(windowHeight*0.5, 200)
  myRoundRacer3 = new RoundRacer(windowHeight*0.75, 250)
}

function draw() {
  background(0);
  myRoundRacer1.move();
  myRoundRacer1.display();
  myRoundRacer2.move();
  myRoundRacer2.display();
  myRoundRacer3.move();
  myRoundRacer3.display();
}

class RoundRacer{
  // Constructor
  constructor(yPosition, color){
    this.x = 0;
    this.y = yPosition;
    this.speed = random(3,15);
    this.c = color
    this.size = 15;
  }

  move(){
    //
    this.x += this.speed;
    if(this.x > width) this.x = 0;
  }

  display(){
    fill(this.c);
    circle(this.x, this.y, this.size);
  }

  
}