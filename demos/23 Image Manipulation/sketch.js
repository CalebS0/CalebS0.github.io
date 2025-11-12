// Image Manipulation
// Caleb Schwab
// 11/12/25
// Working with images, translation between 2D and 1D indices


let pilot;

function setup() {
  loadAssets();
  createCanvas(891, 892);
  pixelDensity(1);
}

async function loadAssets(){
  pilot = await loadImage("assets/aviator.png")
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
  image(pilot, 0,0)
  loadPixels(); // fills the "canvas" pixel array

  // run a filter to modify the pixel array
  // boost();
  // greyScale();

  background(0);
  textImage();

  // updatePixels();
}

function textImage(){
  // render an image using characters
  fill(255);
  for(let x = 0; x < width; x += 10){
    for(let y = 0; y < height; y += 10){
      let avg = getAvg(x,y);
      if(avg > 200) text('%', x, y)
      else if(avg > 100) text("l", )
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

function greyScale(){
  // use the average value of each pixel to turn it grey
  for( let x = 0; x < width; x++){
    for( let y = 0; y < height; y++){
    let avg = getAvg(x,y);
    setPixel(x,y,avg,avg,avg)
    }
  }
}

function boost(){
  // brightening filter
  let boost = map(mouseX, 0, width, -100, 100);
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i] + boost;
    let g = pixels[i+1] + boost;
    let b = pixels[i+2] + boost;
    setPixelOneD(i,r,g,b);
  }
}
