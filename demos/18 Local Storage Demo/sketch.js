// Local Storage Demo
// Caleb Schwab
// 10/24/25

let mySquare;
let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  mySquare = new Bouncer(width/2, height/2);
  textSize(30);
  textAlign(CENTER, CENTER);
  if(localStorage.getItem("numBounces")===null){
    localStorage.setItem("numbounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("numBounces"));
  }
}

function keyPressed(){
  print("delete");
  localStorage.setItem("numBounce", 0);
  totalBounces = 0;
}

function draw() {
  background(220, 220, 220, 10);
  mySquare.move();
  mySquare.display();
  fill(255);
  rect(width/2, height/2-2, 80, 30);
  fill(0);
  text(totalBounces, width/2, height/2);
}


class Bouncer{
  constructor(x, y){
    this.x = x; this.y = y;
    this.xSpeed = 67;
    this.ySpeed = 67;
  }

  // Class Methods
  display(){
    fill(0);
    square(this.x, this.y, 67);
  }

  move(){
    // calculate new position
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Should we bounce?
    if(this.x < 0 || this.x > width){
      this.xSpeed *= -1;
      totalBounces++;
      localStorage.setItem("numBounces", totalBounces);
    
    }
    if(this.y < 0 || this.y > height){
      this.ySpeed *= -1;
      totalBounces++;
      localStorage.setItem("numBounces", totalBounces);
    }
  }
} 