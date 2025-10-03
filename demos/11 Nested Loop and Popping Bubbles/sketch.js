// Nested Loops and Popping Bubbles
// Caleb Schwab
// 10/03/25

let bubbles = [];
let bubbleSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}

function populateArray(){
  // use nested loop to generate x,y positions for all of our bubbles.
  for(let x = 0; x < width; x += bubbleSize ){
    for(let y = 0; y < height; y += bubbleSize){
      let b = {
        x: x,  y: y
      };
      bubbles.push(b);
    }
  }
}

function showBubbles(){
  //travers the array, and display a bubble at each (x,y)
  for( i = 0; i < bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);
    // point-in-circle distance check (pop)
    if(dist(b.x,b.y, mouseX, mouseY) < bubbleSize/2){
      // to delete an item: use .splice()
      // .splice(pos, #ofItemsToDelete, [replacementItems]);
      bubbles.splice(i, 1);
    }
  }
}

function draw() {
  background(255);
  showBubbles()
}













function drawWithGrid(){
  for(x = 0; x <= width; x += 30){// x: 0, 30, 60
    for(y = 0; y <= height; y += 30){
      circle(x, y, 1);
    }
  }
}