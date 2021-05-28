let Y = [];
let Z = [];
let X = [];
let numpts = 100;

function setup(){
  createCanvas(600,700);
  background(0);
  strokeWeight(2);

  stroke(200);
  fill(200);
  quad(0,600,0,700,600,700,600,600);
  for (i = 0; i < numpts+1; i++) {
    X[i] = 100 + 400*i/numpts ;
  }
  p = 0.9;
}


function draw(){
  background(0);
  stroke(200);

  fill(200);
  quad(0,600,0,700,600,700,600,600);
  for (k = 0; k < numpts+1; k++) {
    Y[k] =((1-(abs((X[k]-300)/200))**p)**(1/p))*200+300;
    Z[k] =((1-(abs((X[k]-300)/200))**p)**(1/p))*(-200)+300;
  }
  fill(0);

  text(p, 200,660);
  text('p =', 180,660);
  drawLines();

  p += 0.01;

}

function drawLines(){
  stroke(250);
  fill(250);
  for(le=0; le < numpts; le++){
    line(X[le],Y[le],X[le+1],Y[le+1]);
    line(X[le],Z[le],X[le+1],Z[le+1]);


  }
}
