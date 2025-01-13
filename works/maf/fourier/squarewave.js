let lon = 300;
let x =[];
let suma = [];
let y = [];
let n = 1;


function setup(){
  createCanvas(700,700);
  reset();
  for(let i =0; i<= lon; i++){
    x[i]=2*i/lon;
    suma[i]=0;
  }
  res = createButton('resetear');
  res.position(200,650);
  res.mousePressed(reseteo);

  nex = createButton('siguiente');
  nex.position(400,650);
  nex.mousePressed(next);

}

function calcula(n){

  for(let j=0; j<= lon; j++){
    y[j]=4/PI * 1/n * sin(n*PI*x[j]);
    suma[j] += y[j];
  }
  return y;
}



function draw(){
  frameRate(5);
  reset();

  strokeWeight(2);
  for(let k=0; k< lon; k++){
    stroke(50,150,50);
    line(200*x[k]+100,-200*y[k]+400, 200*x[k+1]+100, -200*y[k+1]+400);
    stroke(150,50,50);
    line(200*x[k]+100,-200*suma[k]+400, 200*x[k+1]+100, -200*suma[k+1]+400);

  }
}



function reset(){
  background(0);
  stroke(250);

  strokeWeight(1);
  line(100,0,100,700);
  line(100,400,600,400);

  strokeWeight(3);
  
  line(100,200,100,600);
  line(100,200,300,200);
  line(300,200,300,600);
  line(300,600,500,600);
  line(500,200,500,600);
}

function reseteo(){
  for(let i =0; i<= lon; i++){
    suma[i]=0;  y = [];
  }
  n=1;
}


function next(){
  y = calcula(n);
  n +=2;


}
