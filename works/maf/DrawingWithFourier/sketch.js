// Coding Challenge 130.3: Drawing with Fourier Transform and Epicycles
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/130.1-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.2-fourier-transform-drawing.html
// https://thecodingtrain.com/CodingChallenges/130.3-fourier-transform-drawing.html
// https://youtu.be/7_vKzcgpfvU


const USER = 0;
const FOURIER = 1;

let x = [];
let fourierX;
let time = 0;
let path = [];
let drawing = [];
let state = -1;

function mousePressed() {
  state = USER;
  drawing = [];
  x = [];
  time = 0;
  path = [];
}

function mouseReleased() {
  state = FOURIER;
  const skip = 1;
  for (let i = 0; i < drawing.length; i += skip) {
    x.push(new Complex(drawing[i].x, drawing[i].y));
  }
  fourierX = dft(x);

  fourierX.sort((a, b) => b.amp - a.amp);
}

function setup() {
  createCanvas(700, 700);
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(54);
  text("Dibujar algo", width/2, height/2);
}

function epicycles(x, y, rotation, fourier) {
  for (let i = 0; i < fourier.length; i++) {
    let prevx = x;
    let prevy = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
    stroke(255);
    line(prevx, prevy, x, y);
  }
  return createVector(x, y);
}

function draw() {

  if (state == USER) {
  background(0);
    // Vector measured from the center
    let point = createVector(mouseX - width / 2, mouseY - height / 2);
    //  Add the vector to the drawing set
    drawing.push(point);
    stroke(255);
    noFill();
    //we start drawing a polygon
    beginShape();
    // For each vector ini drawing, we
    // calculate the vertex with the coordinates measured from the corner
    for (let v of drawing) {
      vertex(v.x + width / 2, v.y + height / 2);
    }
    endShape();

    
  } else if (state == FOURIER) {
  background(0);
    let v = epicycles(width / 2, height / 2, 0, fourierX);
    path.unshift(v);
    beginShape();
    noFill();
    strokeWeight(2);
    stroke(255, 255, 5);
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();

    const dt = TWO_PI / fourierX.length;
    time += dt;

    if (time > TWO_PI) {
      time = 0;
      path = [];
    }
  }

}