// Cars, Cars, Cars
// Caleb Schwab
// 10/21/25

let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Car(300, 100);
}

function draw() {
  background(220);
  drawRoad();
  myCar.display();
  myCar.move();
}

function drawRoad(){
  fill(50);
  rectMode(CORNERS);
  rect(0, height*0.2, width, height*0.8)
  fill("yellow");
  for(let i = 0; i < windowWidth; i += 60){
    rect(i, (height*0.5)-5, i+40, (height*0.5)+5)
  }
}

class Car{
  // constructor
  constructor(y){
    this.y = y; this.type = random(1);
    this.x = random(width);
    this.d = random(0,1)
    this.c = color(random(255),random(255),random(255));
    this.speed = random(2, 10)
    if(this.type === 0) return true;
    else if(this.type === 1) return false;
    // if(this.d === 0) return true;
    // else if(this.d === 1) return false;
  }

  display(){
    rectMode(CORNER);
    noStroke();
    fill(this.c);
    rect(this.x, this.y, 50,  20);
    fill(0);
    for(let i = 5; i<=35; i += 30){
      for(let y = 5; y>=-30; y-=25){
        rect(this.x+i, this.y-y, 10, 5, 2, 2)
      }
    }
    
  }

  move(){
    if(this.d = 1){
      this.x -= this.speed;
      if(this.x < 0) this.x = width;
    }
    else if(this.d = 0){
      this.x += this.speed;
      if(this.x > width) this.x = 0;
    }
  }
}