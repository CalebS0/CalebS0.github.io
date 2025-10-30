// Inheritance and Code in Multiple Files
// Caleb Schwab
// 10/30/25

let objects = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 0;  i<20; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObject(random(width), random(height)));
    objects.push(new LineObject());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}


// Child Class #1 - Circle
class CircleObject extends AnimatedObject{
  constructor(x,y){
    super(x,y);
    // You can also add on to what was in the parent class
    this.size = random(20,40);
  }
  
  //no mention of move()... Will be the same as parent's move()

  display(){// function overide, copies over parent version
if(dist(this.x, this.y, mouseX, mouseY)< this.size/2){
  fill(0,255,0)
}
else fill(255);

circle(this.x, this.y, this.size);
  }
}

// Child Class #2 - Line
class LineObject extends AnimatedObject{
  constructor(){
    super(random(width), random(height));
  }

  move(){ //Combo override, but build on parent version
   super.move(); // rund the parent version move()
   this.x -= 5;
   if(this.x < 0) this.x = width; 
  }

  display(){ //full override (no reference to parent version)
  if(mouseIsPressed){
    strokeWeight(12);
  }
  else strokeWeight(2);

  line(this.x, this.y, this.x + 15, this.y)
  }
}