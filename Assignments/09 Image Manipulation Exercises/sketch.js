// Image Manipulation Exercises
// Caleb Schwab
// 11/13/25

let chip;

function setup() {
  loadAssets();
  createCanvas(windowWidth, windowHeight);
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
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
  image(chip, 0, 0);
  loadPixels();
  majorityColor();
  updatePixels();
}

function majorityColor(){
  for(let x = 0; x < width; x ++){ // runs through all pixels
    for(let y = 0; y < height; y ++){
      let i = (width*y + x) *4
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if(r > g && r > b) { // checks for the majority color
        setPixel(x,y,255,0,0)
      }
      else if(g > b && g > r) {
        setPixel(x,y,0,255,0)
      }
      else {
        setPixel(x,y,0,0,255)
      }
    }
  }
}

function getMaj(x,y){
  let i = (width*y + x) *4
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  if(r > g && r > b) return 0
  else if(g > b && g > r) return 1
  else return 2
}