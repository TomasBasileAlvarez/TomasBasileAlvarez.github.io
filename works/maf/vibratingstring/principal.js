let lon = 300;
let x =[];
let t = 0;
let y = [];
let n = 1;
let v =1;


function setup(){
  createCanvas(700,700);
  reset();
  for(let i =0; i<= lon; i++){
    x[i]=2*i/lon;
  }
  
  ene = createSlider(1,10,1);
  ene.position(400,650);
  ene.style('width', '80px');

}

function calcula(n,t){


  for(let j=0; j<= lon; j++){
    y[j]= cos(n*PI*t*v/2) * sin(n*PI*x[j]/2);
  }
  return y;
}



function draw(){
  let val = ene.value();

  frameRate(10);
  reset();
  calcula(val,t);

  strokeWeight(2);
  for(let k=0; k< lon; k++){
    stroke(50,150,50);
    line(200*x[k]+100,-200*y[k]+400, 200*x[k+1]+100, -200*y[k+1]+400);
  }
  t += 0.02;
}



function reset(){
  background(0);
  stroke(250);

  strokeWeight(1);
  line(100,0,100,700);
  line(100,400,600,400);

  }

function next(){
  y = calcula(n);
  n +=2;


}
