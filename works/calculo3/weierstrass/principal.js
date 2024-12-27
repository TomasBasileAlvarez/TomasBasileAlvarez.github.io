let Y = [];
let X = [];
let numpts = 5000;
let maxi = 70;
let a = 0.4;
let ranx = 10;
let rany = 5;
function setup(){
  createCanvas(600,700);
  background(0);

  stroke(200);
  fill(200);
  quad(0,600,0,700,600,700,600,600);
  for (i = 0; i < numpts+1; i++) {
    X[i] = -ranx + ranx*2*i/numpts ;
  }
  sli = createSlider(0,10,0,0.01);
  sli.position(100,620);
  sli.style('width','200px');

}


function draw(){
  background(0);
  stroke(200);

  fill(200);
  quad(0,600,0,700,600,700,600,600);
  stroke(150);
  strokeWeight(1.5)
  line(0,300,600,300);
  line(300,0,300,600);

  line(290,300-300/rany,310,300-300/rany);
  line(300+300/ranx,290,300+300/ranx,310);

  text("1",305,300-300/rany-5);
  text("1",300+300/ranx+5,310);
  p = sli.value();
  stroke(0);
  fill(0);
  strokeWeight(1);
  text("b =", 200,650);
  text(p,220,650);


  stroke(200);
  strokeWeight(1);
  

  
  for (k = 0; k < numpts+1; k++) {
    Y[k] =0;
    for(n=0;n<20;n++){
      Y[k] += a**n * cos(p**n*PI*X[k]);
    }
  }

  drawLines();

}

function drawLines(){
  stroke(250);
  fill(250);
  for(le=0; le < numpts; le++){
    line((X[le]+ranx)*600/(ranx*2),(-Y[le]+rany)*600/(rany*2),(X[le+1]+ranx)*600/(2*ranx),(-Y[le+1]+rany)*600/(2*rany));
  }
}
