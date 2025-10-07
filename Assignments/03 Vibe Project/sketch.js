// Vibe Project
// Caleb Schwab
// 10/07/25

// 2D Rocket League — 2-Player Version with Proper Goals + Reverse (p5.js)
// ------------------------------------------------------------------------
// Player 1: W/A/S/D
// Player 2: Arrow Keys
// Space: Reset Ball

let fieldW = 1200;   // playable field width
let fieldH = 600;
let goalDepth = 100; // nets extend behind the wall
let goalHeight = fieldH / 3;
let p1, p2, ball;
let scores = { p1: 0, p2: 0 };
let goalCooldown = 0;

function setup() {
  createCanvas(fieldW + goalDepth * 2, fieldH); // add goal space
  resetGame();
}

function resetGame() {
  p1 = new Car(createVector(goalDepth + 250, height / 2), color(80, 200, 255), 'WASD');
  p2 = new Car(createVector(width - goalDepth - 250, height / 2), color(255, 120, 120), 'ARROWS');
  ball = new Ball(createVector(width / 2, height / 2));
  goalCooldown = 0;
}

function draw() {
  background(25);
  drawField();

  if (goalCooldown <= 0) {
    p1.update();
    p2.update();
    ball.update();

    collideCarBall(p1, ball);
    collideCarBall(p2, ball);
    collideCarCar(p1, p2);
    checkGoals();
  } else {
    goalCooldown--;
  }

  ball.show();
  p1.show();
  p2.show();

  // HUD
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(`Blue: ${scores.p1}   |   Red: ${scores.p2}`, width / 2, 30);

  textSize(14);
  textAlign(LEFT);
  text("P1 (Blue): W/A/S/D   |   P2 (Red): Arrows   |   Space: Reset Ball", 20, height - 20);
}

// ---------- Draw field ----------
function drawField() {
  noStroke();
  fill(40, 100, 40);
  rect(goalDepth, 0, fieldW, fieldH); // playable area

  // goals behind the field
  fill(40, 40, 160, 180);
  rect(0, height / 3, goalDepth, goalHeight);
  fill(160, 40, 40, 180);
  rect(width - goalDepth, height / 3, goalDepth, goalHeight);

  // goal posts
  stroke(255);
  strokeWeight(3);
  line(goalDepth, height / 3, goalDepth, height * 2 / 3);
  line(width - goalDepth, height / 3, width - goalDepth, height * 2 / 3);

  // center markings
  stroke(255, 100);
  strokeWeight(2);
  noFill();
  ellipse(width / 2, height / 2, 180, 180);
  line(width / 2, 0, width / 2, height);
}

// ---------- Classes ----------
class Car {
  constructor(pos, col, controlScheme) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.angle = 0;
    this.col = col;
    this.radius = 25;
    this.accel = 0.3;
    this.reverseAccel = 0.15; // slower reverse speed
    this.turnSpeed = 0.06;
    this.maxSpeed = 4;
    this.maxReverseSpeed = 2.5;
    this.control = controlScheme;
  }

  handleInput() {
    let left, right, up, down;
    if (this.control === 'WASD') {
      left = keyIsDown(65);
      right = keyIsDown(68);
      up = keyIsDown(87);
      down = keyIsDown(83);
    } else if (this.control === 'ARROWS') {
      left = keyIsDown(LEFT_ARROW);
      right = keyIsDown(RIGHT_ARROW);
      up = keyIsDown(UP_ARROW);
      down = keyIsDown(DOWN_ARROW);
    }

    if (left) this.angle -= this.turnSpeed;
    if (right) this.angle += this.turnSpeed;

    // forward
    if (up) {
      let force = p5.Vector.fromAngle(this.angle).mult(this.accel);
      this.vel.add(force);
    }

    // reverse
    if (down) {
      let reverseForce = p5.Vector.fromAngle(this.angle).mult(-this.reverseAccel);
      this.vel.add(reverseForce);
    }
  }

  update() {
    this.handleInput();
    // Limit forward and reverse separately
    let speed = this.vel.mag();
    let dir = this.vel.copy().normalize();
    let forwardDot = dir.dot(p5.Vector.fromAngle(this.angle));

    if (forwardDot > 0) this.vel.limit(this.maxSpeed);
    else this.vel.limit(this.maxReverseSpeed);

    this.pos.add(this.vel);
    this.vel.mult(0.98);

    // stay inside field
    this.pos.x = constrain(this.pos.x, goalDepth + this.radius, width - goalDepth - this.radius);
    this.pos.y = constrain(this.pos.y, this.radius, height - this.radius);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.col);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, this.radius * 2, this.radius, 5);
    fill(255, 200);
    triangle(this.radius, 0, this.radius - 10, -10, this.radius - 10, 10);
    pop();
  }
}

class Ball {
  constructor(pos) {
    this.pos = pos.copy();
    this.vel = createVector(random(-3, 3), random(-2, 2));
    this.r = 15;
  }

  update() {
    this.pos.add(this.vel);
    this.vel.mult(0.995);

    // bounce top/bottom
    if (this.pos.y < this.r || this.pos.y > height - this.r) {
      this.vel.y *= -1;
      this.pos.y = constrain(this.pos.y, this.r, height - this.r);
    }

    // bounce off side walls except goals
    if (this.pos.x < goalDepth + this.r && (this.pos.y < height / 3 || this.pos.y > height * 2 / 3)) {
      this.vel.x *= -1;
      this.pos.x = goalDepth + this.r;
    }
    if (this.pos.x > width - goalDepth - this.r && (this.pos.y < height / 3 || this.pos.y > height * 2 / 3)) {
      this.vel.x *= -1;
      this.pos.x = width - goalDepth - this.r;
    }
  }

  show() {
    fill(255, 220, 80);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

// ---------- Physics ----------
function collideCarBall(car, ball) {
  let distVec = p5.Vector.sub(ball.pos, car.pos);
  let dist = distVec.mag();
  if (dist < car.radius + ball.r) {
    let overlap = car.radius + ball.r - dist;
    let dir = distVec.copy().normalize();
    ball.pos.add(dir.copy().mult(overlap));
    ball.vel.add(dir.copy().mult(0.8));
  }
}

function collideCarCar(c1, c2) {
  let d = p5.Vector.dist(c1.pos, c2.pos);
  if (d < c1.radius + c2.radius) {
    let overlap = (c1.radius + c2.radius - d) / 2;
    let dir = p5.Vector.sub(c1.pos, c2.pos).normalize();
    c1.pos.add(dir.copy().mult(overlap));
    c2.pos.sub(dir.copy().mult(overlap));
  }
}

function checkGoals() {
  if (ball.pos.x < goalDepth / 2 && ball.pos.y > height / 3 && ball.pos.y < height * 2 / 3) {
    scores.p2++;
    goalCooldown = 60;
    resetPositions();
  }
  if (ball.pos.x > width - goalDepth / 2 && ball.pos.y > height / 3 && ball.pos.y < height * 2 / 3) {
    scores.p1++;
    goalCooldown = 60;
    resetPositions();
  }
}

function resetPositions() {
  p1.pos.set(goalDepth + 250, height / 2);
  p1.vel.set(0, 0);
  p2.pos.set(width - goalDepth - 250, height / 2);
  p2.vel.set(0, 0);
  ball.pos.set(width / 2, height / 2);
  ball.vel.set(random(-3, 3), random(-2, 2));
}

// ---------- Helpers ----------
function keyPressed() {
  if (key === ' ') {
    ball.pos.set(width / 2, height / 2);
    ball.vel.set(random(-3, 3), random(-2, 2));
  }
}
