// Working with Images
// Caleb Schwab
// 9/25/25

let lionL, lionR;
let facingRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  imageMode(CENTER);
  noCursor();
}

async function loadAssets(){
  //handle loading all the images
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");
}

function draw() {
  background(220);
  //Update our direction
  if(pmouseX < mouseX){//Implies mouse is moving right
    facingRight = true;
  }
  else if(pmouseX > mouseX){//Implies mouse is moving right
    facingRight = false;  
  }
  if(facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
  else{
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
}