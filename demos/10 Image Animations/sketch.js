// Images and Animations
// Caleb Schwab
// 10/02/25

//Global Variables
let pinImages = []; // array === list
let current = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  print("done loading");
  // frameRate(20) // usually only use frameRate() to debug
}

async function loadAssets(){
  //Load all of our pinwheel images
  for(let i = 0; i < 9; i++){
    pinImages.push(await loadImage("assets/pin-0"+i+".png"));
  }
}
function draw() { //this IS a loop
  background(0);
  // animateWithFor();
  circle(mouseX, mouseY, 50)
  //manage current image to display
  if(frameCount % 10 === 0){
    current += 1;
  if(current > 8) current =0
  }
  imageMode(CENTER);
  image(pinImages[current], width/2, height*0.6);
  //Screen is updated here
}

function animateWithFor(){
  //try to make an animation with a FOR loop
  // - - doesn't work!
  //FOR loop yields a SINGLE IMAGE
  imageMode(CENTER);
  for(i = 0; i <9; i++){
    image(pinImages[i], width/2, height *0.7);
  }
}