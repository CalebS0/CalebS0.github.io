// Image Manipulation Exercises
// Caleb Schwab
// 11/13/25

let chip;
let hand;
let nuit;
let race;

function setup() {
  loadAssets();
  createCanvas(600, 600);
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
  hand = await loadImage("assets/hand.jpg");
  nuit = await loadImage("assets/nuit.jpg");
  race = await loadImage("assets/race.jpg");
  butterfly = await loadImage("assets/butterfly.jpg");

}

function setPixelOneD(pos ,r, g, b){
  // pos -> 1D location in pixels array
  // r,g,b -> new colors for that pixel
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function setPixel(x,y,r,g,b){
// x, y -> pixel location
// r,g,b -> new pixel color
let index = (width*y + x) * 4
setPixelOneD(index, r, g, b);
}

function draw() {
  background(220);
  image(butterfly, 0, 0);
  // image(race,0,600);
  // image(nuit,0,1200);
  // image(hand,0,1800);

  loadPixels();

  // mirror();
  // fiveColor();
  // noGreen();
  // majorityColor();
  rotateImg();

  updatePixels();
  
}

function majorityColor(){
  for(let x = 0; x < width; x ++){ // runs through all pixels
    for(let y = 0; y < 600; y ++){
      let i = (width*y + x) *4
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if(b > r && b > g) { // checks for the majority color
        setPixel(x,y,0,0,255)
      }
      else if(g > b && g > r) {
        setPixel(x,y,0,255,0)
      }
      else {
        setPixel(x,y,255,0,0)
      }
    }
  }
}


function noGreen(){
  for(let x = 0; x < width; x ++){ // runs through all pixels
    for(let y = 600; y < 1200 ; y ++){
      let i = (width*y + x) *4
      let r = pixels[i];
      let b = pixels[i+2];
      if(x > width/2){
        setPixel(x,y,r,0,b)
      }
    }
  }
}

function getAvg(x,y){
  // return the average intensity of pixel (x,y)
  let i = (width*y + x) *4
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+g+b)/3
}

function fiveColor(){
  for(let x = 0; x < width; x ++){ // runs through all pixels
    for(let y = 1200; y < 1800; y ++){
      let avg = getAvg(x,y)
      if(avg > 205){
        setPixel(x,y,170,230,220)
      }
      else if(avg > 155){
        setPixel(x,y,105,150,210)
      }
      else if(avg > 105){
        setPixel(x,y,120,180,60)
      }
      else if(avg > 55){
        setPixel(x,y,130,30,130)
      }
      else{
        setPixel(x,y,90,10,50)
      }

    }
  }
}

function mirror(){
  for(let x = 0; x < width; x ++){ // runs through all pixels
    for(let y = 1800; y < height; y ++){
      let i = (width*y + x) *4
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if(x > width/2){
        setPixel(width-x,y,r,g,b)
      }
    }
  }
}

function rotateImg(){
  let srcPixels = structuredClone(pixels);
  for(let x = 0; x < width; x ++){ // runs through all pixels
    for(let y = 0; y < height; y ++){
      let i = (width*y + x) *4
      let r = srcPixels[i];
      let g = srcPixels[i+1];
      let b = srcPixels[i+2];
      if(x < width/2 && y < height/2){
        setPixel(x+width/2, y, r, g, b)
      }
      else if(x > width/2 && y < height/2){
        setPixel(x, y+height/2, r, g, b)
      }
      else if(x > width/2 && y > height/2){
        setPixel(x-width/2, y, r, g, b)
      }
      else setPixel(x, y-height/2, r, g, b)
    }
  }
}

function xBlur(){
  let srcPixels = structuredClone(pixels);
}