let state =2;
let drawing = [];
let f =0;
let draw2 = [];


function setup(){

  createCanvas(700,700);
  background(0);
   stroke(200);

   line(100,0,100,500);
   line(100,500,900,500);
   line(600,490,600,510);
   line(90,3,110,3);
   noStroke();
   fill(250);
   textSize(12);
   text('0', 90,510);
   text('1', 605,515);
   text('1', 85,15);
   state=0;
   strokeWeight(2);
  dr = createButton('Draw');
  dr.position(100,650);
  dr.mousePressed(change0);
  nex = createButton('Next');
  nex.position(300,650);
  nex.mousePressed(change1);
}


function change0(){
   background(0);

   draw2=[];
   drawing=[];
   f=0;
   dibuja();
   state = 0;
 }
function change1(){
  f=1;
  dibuja();
  state = 1;
}

function draw(){
  if (state == 0){
      if (mouseIsPressed){
    let x = [(mouseX-100)/500, (500-mouseY)/500];
    drawing.push(x);
  }
    stroke(255);
    noFill();
    beginShape();
    for (let v of drawing){
      point(v[0]*500+100,-v[1]*500+500);
    } 
    endShape();

  } else if (state == 1){
    stroke(200);
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
    if (l < 40000){
      agregark();
    }
    state=2;


  }
}

function dibuja(){
  // for (let k = 0; k< drawing.length; k++){
  //   stroke(250);
  //   strokeWeight(1);
  //   point(drawing[k][0]*500+100,-drawing[k][1]*500+500);
  // }
  stroke(200);
  line(100,0,100,500);
  line(100,500,900,500);
  line(600,490,600,510);
  line(90,3,110,3);
  noStroke();
  fill(250);
  textSize(12);
  text('0', 90,510);
  text('1', 605,515);
  text('1', 85,15);
  // line(0,0,500,500);
}




function agregark(){
  let l = drawing.length;
  let st =0;
  if(f>0){
    let st = l/2;
  }
  for (let j = Math.floor(st); j<l; j++){
    draw2 = draw2.concat([f1s(drawing[j])], [f2s(drawing[j])]);
  }
  drawing=draw2;
  draw2=[];

}




function f1s(x){
  stroke(200,20,20);

  point((x[0]/2-x[1]/2)*500+100,-(x[0]/2 + x[1]/2)*500+500);
  return [x[0]/2-x[1]/2, x[0]/2 + x[1]/2];

  }  
function f2s(x){
  stroke(20,200,20);
  point((-x[0]/2-x[1]/2+1)*500+100,-(x[0]/2 - x[1]/2)*500+500);

  return [-x[0]/2-x[1]/2+1, x[0]/2 - x[1]/2];
}

