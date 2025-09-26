// Objects and Noise
// Caleb Schwab
// 09/26/25

let ball;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = { // object notation. Inside the bracket set up a bunch of property:value pairs
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.02
  }
  ball2 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball3 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball4 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball5 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball6 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball7 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball8 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball9 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball10 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball11 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball12 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball13 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball14 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball15 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.02
  }
  ball16 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball17 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball18 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball19 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball20 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball21 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball22 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball23 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball24 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball25 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball26 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball27 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
  ball28 = {
    x: 300, y:400, size: random(30), c: color(random(255),random(255),random(255)), timeX: random(100), timeY: random(100), timeOff: 0.07
  }
}

function draw() {
  //TRICK#1 //background(220);
  //TRICK#2 -> clear background with semi-transparent box
  fill(255,25); //0-255 opacity: 4%
  rect(0,0,width, height)
  moveBall(ball)
  moveBall(ball2)
  moveBall(ball3)
  moveBall(ball4)
  moveBall(ball5)
  moveBall(ball6)
  moveBall(ball7)
  moveBall(ball8)
  moveBall(ball9)
  moveBall(ball10)
  moveBall(ball11)
  moveBall(ball12)
  moveBall(ball13)
  moveBall(ball14)
  moveBall(ball15)
  moveBall(ball16)
  moveBall(ball17)
  moveBall(ball18)
  moveBall(ball19)
  moveBall(ball20)
  moveBall(ball21)
  moveBall(ball22)
  moveBall(ball23)
  moveBall(ball24)
  moveBall(ball25)
  moveBall(ball26)
  moveBall(ball27)
  moveBall(ball28)
}

function moveBall(b){
//b -> Ball type object 
//update position and draw provided ball

//generate random position change (x and y)
let dx = noise(b.timeX); //0-1
dx = map(dx, 0, 1,-5, 5);
let dy = noise(b.timeY);
dy = map(dy, 0, 1, -5, 5);

//advance our noise graph "cursors"
b.timeX += b.timeOff; b.timeY += b.timeOff;

b.x += dx;    b.y += dy;

//handle any "warp-arounds necessary"
if(b.x < 0) b.x += width;
else if(b.x > width) b.x -= width;

if(b.y < 0) b.y += height;
else if(b.y > height) b.y -= height;

//render the circle
fill(b.c);
circle(b.x, b.y, b.size);
}