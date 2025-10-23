// Cars, Cars, Cars
// Caleb Schwab
// 10/21/25

let eastbound = [];
let westbound = [];

let myVehicle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i =0; i<20; i++){
   westbound.push(new Vehicle(Math.floor(random(1,5)), 0, Math.floor(random(2))));
   eastbound.push(new Vehicle(Math.floor(random(1,5)), 1, Math.floor(random(2))));
  }
  
}

function draw() {
  background(220);
  drawRoad();
  for( let w of westbound){
    w.action();
  }
  for( let e of eastbound){
    e.action();
  }
}

function drawRoad(){
  fill(0);
  rectMode(CORNERS);
  rect(0, height*0.2, width, height*0.8)
  fill("yellow");
  for(let i = 0; i < windowWidth; i += 60){
    rect(i, (height*0.5)-5, i+40, (height*0.5)+5)
  }
}

class Vehicle{
  // constructor
  constructor(y, d, t){
    this.type = t;
    this.x = random(width);
    this.c = color(random(255),random(255),random(255));
    this.speed = Math.floor(random(2, 10))
    this.d = d;
    if(this.d === 0) this.y = (y*50)+(height*0.2); // westbound
    else if (this.d === 1) this.y = (y*50)+(height*0.5); // eastbound
  }

  display(){
    rectMode(CORNER);
    noStroke();
    fill(this.c); // fill with color
    if(this.type === 1){// Car
      rect(this.x, this.y+5, 50,  20);
      fill(100);
      for(let i = 5; i<=35; i += 30){
        for(let y = 0; y>=-35; y-=25){
          rect(this.x+i, this.y-y, 10, 5, 2, 2)
        }
      }
    }
    else if(this.type === 0){// Truck
      rect(this.x, this.y, 60, 30);
      fill(100);
      for(let i = 10; i<=45; i += 35){
        for(let y = 5; y>=-40; y-=35){
          rect(this.x+i, this.y-y, 10, 5, 2, 2)
        }
      }
      strokeWeight(2);
      stroke(50);
      fill(255);
      if(this.d === 1){
        rect(this.x+50, this.y, 10, 30);
      }
      else if(this.d === 0){
        rect(this.x, this.y, 10, 30);
      }
      strokeWeight(0)
    }
  }

  move(){
    if(this.d === 0){ // westbound
      this.x -= this.speed;
      if(this.x < 0) this.x = width;
    }
    else if(this.d === 1){ // eastbound
      this.x += this.speed;
      if(this.x > width) this.x = 0;
    }
  }

  speedUp(){
    if(this.speed < 15) this.speed += 1;
  }

  speedDown(){
    if(this.speed > 0) this.speed -= 1;
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }
  action(){
  this.display();
  this.move();
  this.down = Math.floor(random(100));
  if(this.down === 1) this.speedDown();
  this.up = Math.floor(random(100));
  if(this.up === 1) this.speedUp();
  this.change = Math.floor(random(100));
  if(this.change === 1) this.changeColor();
  }

}

function mousePressed(){
  if(mouseButton)
  if(keyIsDown(SHIFT)){
    westbound.push(new Vehicle(Math.floor(random(1,5)), 0, Math.floor(random(2))));
  }
  else{
    eastbound.push(new Vehicle(Math.floor(random(1,5)), 1, Math.floor(random(2))));
  }
}