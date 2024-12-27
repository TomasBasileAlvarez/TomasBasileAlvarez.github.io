var a = 1;
var b = 0.5;
var c = 0;
var d = 0.7;


function setup()  {


  createCanvas(800,800);


  rojox = createSlider(-2,2,0.9,0.01);
  rojox.position(100,700);
  rojox.style('width','80px');

  rojoy = createSlider(-2,2,0.5,0.01);
  rojoy.position(100,750);
  rojoy.style('width','80px');

  verdex = createSlider(-2,2,0.3,0.01);
  verdex.position(250,700);
  verdex.style('width','80px');

  verdey = createSlider(-2,2,1.6,0.01);
  verdey.position(250,750);
  verdey.style('width','80px');

  par = createSlider(0.001,1,0.001,0.001);
  par.position(600,700);
  par.style('width','80px');


}

function draw() {
  translate(width/2,height/2);
  scale(width/4);
  a = rojox.value();
  b = rojoy.value();
  c = verdex.value();
  d = verdey.value();
  t = par.value();

  background(0);
  stroke(250);
  fill(250);
  strokeWeight(6/width);
  line(0,2,0,-2);
  line(-2,0,2,0);
  textSize(4/width*12);
  text('0',0,0);
  text('1',1,0);
  text('-1',-1,0);
  text('2',2,0);
  text('-2',-2,0);

  text('1',0,-1);
  text('2',0,-2);
  text('-1',0,1);
  text('-2',0,2);

  
  strokeWeight(0.4*4/width);


  for (var i = -15; i <= 15; i++) {

    stroke(250);
    fill(250);
    line(-2,-((-2-i*t*c)/(1+t*(a-1))*t*b+i*(1+t*(d-1))),2,-((2-i*t*c)/(1+t*(a-1))*t*b+i*(1+t*(d-1))));
    line(-2,-((-2-i*(1+t*(a-1)))/(t*c)*(1+t*(d-1))+i*t*b),2,-((2-i*(1+t*(a-1)))/(t*c)*(1+t*(d-1))+i*t*b));

    stroke(0,70,0);
    line(0,0,1+t*(a-1),-b*t);
    stroke(70,0,0);
    line(0,0,c*t,-(1+t*(d-1)));
  }
  

  stroke(0,250,0);
  fill(0,250,0);
  strokeWeight(4/width);
  line(0,0,a,-b);
  rect(a,-b,0.01,0.01);
  stroke(250,0,0);
  strokeWeight(4/width);
  fill(0,250,0);

  line(0,0,c,-d);
  rect(c,-d,0.01,0.01);






  stroke(200);
  strokeWeight(0.5*4/width);


  fill(250);
  strokeWeight(0.5*4/width);
  text('a:',-1.05,1.55);
  text('b:',-1.05,1.8);
  text(a,-0.95,1.55);
  text(b,-0.95,1.8);

  text('c:',-0.3,1.55);
  text('d:',-0.3,1.8);
  text(c,-0.2,1.55);
  text(d,-0.2,1.8);

}


