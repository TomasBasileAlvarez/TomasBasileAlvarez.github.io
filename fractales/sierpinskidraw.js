const USER = 0;
const FRAC = 1;

let x = [];
let time = 0;
let state =2;
let path = [];
let drawing = [];

function mousePressed(){
  state = USER;
  drawing = [];
  x = [];
  time = 0;
  path = [];
}

function mouseReleased(){
  state = FRAC;
}


function setup(){
  createCanvas(700,700);
  background(0);
  push();
  textSize(80);
  noStroke();
  fill(250);
  text('Draw Something',20,200)
  pop();
}


function agregars(ser){
  let l = ser.length;
  for (let j = Math.floor(l/4); j<l; j++){
    ser = ser.concat([f1s(ser[j])], [f2s(ser[j])], [f3s(ser[j])]);
  }
  return ser;
}

function f1s(x){
  return [x[0]/2, x[1]/2];
  }  
function f2s(x){
  return [x[0]/2 +1/2, x[1]/2];
}
function f3s(x){
  return [x[0]/2 +1/4, x[1]/2 + 0.433013];
}





let lo = 0;

function draw(){
  if (state == USER){
    frameRate(30);
    background(0);
    let x = [(mouseX-100)/500, (500-mouseY)/500];
    drawing.push(x);
    stroke(255);
    noFill();
    beginShape();
    for (let v of drawing){
      point(v[0]*500+100,-v[1]*500+500);
    } 
    endShape();
    lo = 0;
  } else if (state == FRAC){
    frameRate(1);
    background(0);
    stroke(200);
    strokeWeight(2);
    line(100,0,100,500);
    line(100,500,900,500);
    line(600,490,600,510);
    line(90,3,110,3);

    noStroke();
    fill(250);
    text('0', 90,510);
    text('1', 605,515);
    text('1', 85,15);
    l = drawing.length;

    for (let k = 0; k< drawing.length; k++){
      stroke(250,20*lo,lo*20);
      strokeWeight(2);
      point(drawing[k][0]*500+100,-drawing[k][1]*500+500);
    }
    lo +=1;
    if (l < 40000){
      drawing = agregars(drawing);
    }


  }
}