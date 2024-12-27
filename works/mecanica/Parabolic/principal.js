let t = 0;
let x = 0;
let y = -0.01;
let th0 = 0;
let lista = [];
let v =0;
let th = 0;

function setup()  {

  createCanvas(500,700);
  background(51);
  cy0 = createSlider(0,100,-0.01,1);
  cy0.position(50, 550);
  cy0.style('width','80px');

  cang = createSlider(0,90,0,0.01);
  cang.position(200,550);
  cang.style('width','80px');

  cv = createSlider(0,20,10,0.2);
  cv.position(350,550);
  cv.style('width','80px');

  
  bstart = createButton('Start');
  bstart.position(50,640);
  bstart.mousePressed(start);

  x = 0;
  y = cy0.value();
  vy = cv.value()*sin(cang.value()*PI/180);

}

function draw() {
  x0 = 0;
  y0 = cy0.value();
  v0 = cv.value();
  th0 = cang.value();
  background(51);
  frameRate(100);
  

  //background(51);
  stroke(51);
  rect(0,0,2,500);


  fill(200);
  stroke(200);
  strokeWeight(1);
  rect(0,500,500,300);
  rect(500,0,300,800);
  stroke(0);
  fill(0);
  text(y0, 100, 580);
  text(th0, 260,580);
  text(v0, 400,580);
  tr = round(t,3);
  text(tr,400,540);
  text("t =", 380,540);
  text("s", 430,540);
  text("y0 =", 70,580);
  text("m", 120,580);
  text("th0 =", 220, 580);
  text("v0 =", 360, 580);
  text(round(x,3), x*5, 510);
  text("m", x*5+40,510);





  fill(40,200,0);
  stroke(40,200,50);
  strokeWeight(1);
  line(0,(1-y0/100)*500, 5*v0*cos(th0*PI/180), (1-y0/100)*500-5*v0*sin(th0*PI/180));

  strokeWeight(7);
  x0p = x0;
  y0p = (1-y0/100) * (500);
  stroke(0,200,0);
  point(x0p,y0p);

  stroke(40,200,50);

  
  if(y>=0){
  x += v*cos(th*PI/180)*0.01;
  y += vy*0.01;
  vy-= 9.81*0.01;
  t+=0.01;
  append(lista, [x*5,500*(1-y/100)]);
  }  else{
    y=-0.01;
  }
  
  for (var i = 0; i < lista.length; i++) {
    point(lista[i][0],lista[i][1]);
  }
}

function start(){
  t=0;
  x=0;
  y=cy0.value();
  v = cv.value();
  th = cang.value();
  
  
  vy = cv.value()*sin(th*PI/180);
  lista = [];
}


