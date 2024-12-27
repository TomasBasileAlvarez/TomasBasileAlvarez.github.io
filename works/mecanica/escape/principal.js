var p;
let t = 0;
let M = 1;
let dt = 0.001;
let x = 0.5;
let y = 0.5;
let vx = 0.5;
let vy = -0.5;
let state = 0;

function setup()  {
  createCanvas(800,800);
  background(0);



  svy0 = createSlider(0, 4,2 ,0.01);
  svy0.position(10, 130);
  svy0.style('width', '180px');

  re = createButton('reset');
  re.position(10, 180);
  re.mousePressed(reset);

  st = createButton('start');
  st.position(10, 220);
  st.mousePressed(start);

}

function draw() {
  frameRate(2000);
  


  translate(width/2,height/2);
  scale(400);

  if (state ==0){
  background(0);
  stroke(250);
  fill(250);
  textSize(12/400);
  
  text("v =", -0.9,-0.6);
  text(svy0.value(),-0.82,-0.6);

  }

  stroke(200);
  fill(200);
  strokeWeight(1/400);

  fill(50,50,200);
  stroke(200,200,0);
  ellipse(0,0,0.4,0.4);

  fill(250);
  stroke(150);
  ellipse(x,y,0.02,0.02);

  if (state == 2){

  dvs = fuerza(x,y);
  dvx = dvs[0];
  dvy = dvs[1];
  vx = vx+ dvx * dt;
  vy = vy+ dvy * dt;
  x += vx*dt;
  y += vy*dt;
  t+=dt;

  if (y > -0.2){
    state = 0;
  }
  }

  if (state ==0){
    x = mouseX;
    y = mouseY;
    vx = 0;
    vy = -svy0.value();
    x = 0;
    y = -0.2;

    // if (-1/(x**2+y**2)**(1/2) + 1/2*(vx**2+vy**2)>0){
    //   stroke(200,0,0);
    // }else{
    //   stroke(0,200,0);
    // }

    line(x,y,x+vx/10,y+vy/50);
  }
  stroke(0);
  fill(0);
  rect(-1,-0.2,0.5,0.5);
  stroke(250);
  textSize(20/400);
  text("y =", -0.9,0);

  text(round(-y,3),-0.7,0);
}

function fuerza(x,y){
  dvx = -x/(x**2+y**2)**(3/2);
  dvy = -y/(x**2+y**2)**(3/2);
  return([dvx,dvy]);
}

function start(){
  vx = 0;
  vy = -svy0.value();
  x = 0;
  y = -0.2;
  state =2;
}

function reset(){
  background(0);
  state=0;
}


