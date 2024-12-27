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

  sx0 = createSlider(-1,1,0.5,0.01);
  sx0.position(10, 10);
  sx0.style('width', '80px');

  sy0 = createSlider(-1,1,0.5,0.01);
  sy0.position(10, 50);
  sy0.style('width', '80px');

  svx0 = createSlider(-2, 2, 0.5,0.01);
  svx0.position(10, 90);
  svx0.style('width', '80px');
  svy0 = createSlider(-2, 2, 0.5,0.01);
  svy0.position(10, 130);
  svy0.style('width', '80px');

  re = createButton('reset');
  re.position(10, 180);
  re.mousePressed(reset);

  st = createButton('start');
  st.position(10, 220);
  st.mousePressed(start);

}

function draw() {
  


  translate(width/2,height/2);
  scale(400);

  if (state ==0){
  background(0);
  stroke(250);
  fill(250);
  textSize(12/400);
  text("x0 =", -0.9,-0.9);
  text(sx0.value(), -0.82,-0.9);
  text("y0 =", -0.9,-0.8);
  text(sy0.value(),-0.82,-0.8);
  text("vx0 =", -0.9,-0.7);
  text(svx0.value(),-0.82,-0.7);
  text("vy0 =", -0.9,-0.6);
  text(svy0.value(),-0.82,-0.6);
  }

  stroke(200);
  fill(200);
  strokeWeight(1/400);

  fill(200,200,0);
  stroke(200,200,0);
  ellipse(0,0,0.05,0.05);

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
  }

  if (state ==0){
    x = mouseX;
    y = mouseY;
    vx = svx0.value();
    vy = -svy0.value();
    x = sx0.value();
    y = sy0.value();

    // if (-1/(x**2+y**2)**(1/2) + 1/2*(vx**2+vy**2)>0){
    //   stroke(200,0,0);
    // }else{
    //   stroke(0,200,0);
    // }

    line(x,y,x+vx/10,y+vy/10);
  }
}

function fuerza(x,y){
  dvx = -x/(x**2+y**2)**(3/2);
  dvy = -y/(x**2+y**2)**(3/2);
  return([dvx,dvy]);
}

function start(){
  vx = svx0.value();
  vy = -svy0.value();
  x = sx0.value();
  y = sy0.value();
  state =2;
}

function reset(){
  background(0);
  state=0;
}


