var a = 1;
var b = 0.5;
var c = 0;
var d = 0.7;
var state = 0;


function setup()  {

  createCanvas(800,800);
  rojox = createSlider(-2,2,1,0.01);
  rojox.position(100,700);
  rojox.style('width','80px');

  rojoy = createSlider(-2,2,1,0.01);
  rojoy.position(100,750);
  rojoy.style('width','80px');

  verdex = createSlider(-2,2,0.7,0.01);
  verdex.position(500,700);
  verdex.style('width','80px');

  verdey = createSlider(-2,2,0.5,0.01);
  verdey.position(500,750);
  verdey.style('width','80px');
}

function draw() {
  a = rojox.value();
  b = rojoy.value();
  c = verdex.value();
  d = verdey.value();
  background(0);
  stroke(250);
  fill(250);
  strokeWeight(1);
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  strokeWeight(0.4);

  text('0',width/2*1.02,height/2*1.03);
  text('1',width/2*0.99+200,height/2*1.03);
  text('-1',width/2*0.99-200,height/2*1.03);
  text('2',width/2*0.99+400,height/2*1.03);
  text('-2',width/2*0.99-400,height/2*1.03);

  text('1',width/2*0.96,height/2*1.01-200);
  text('2',width/2*0.96,height/2*1.01-395);
  text('-1',width/2*0.96,height/2*1.01+200);
  text('-2',width/2*0.96,height/2*1.01+395);


  fill(0,100,100);
  quad(width/2,height/2,a*width/4+width/2,-b*height/4+height/2,(a+c)*width/4+width/2,-(b+d)*height/4+height/2,c*width/4+width/2,-d*height/4+height/2);

  strokeWeight(4);
  stroke(0,250,0);
  point(a*width/4+width/2,-b*height/4+height/2);
  strokeWeight(1);
  line(width/2,height/2,a*width/4+width/2,-b*height/4+height/2);
  stroke(250,0,0);
  strokeWeight(4);
  point(c*width/4+width/2,-d*height/4+height/2);
  strokeWeight(1);
  line(width/2,height/2,c*width/4+width/2,-d*height/4+height/2);


  stroke(250);
  strokeWeight(0.8);
  line(a*width/4+width/2,-b*height/4+height/2,(a+c)*width/4+width/2,-(b+d)*height/4+height/2);
  line(c*width/4+width/2,-d*height/4+height/2,(a+c)*width/4+width/2,-(b+d)*height/4+height/2);

  fill(250);
  strokeWeight(0.5);
  text('Green Vector (a,b):',100,670);
  text('a:',190,710);
  text('b:',190,760);
  text(a,206,710);
  text(b,206,760);

  text('Red Vector (c,d):',500,670);
  text('c:',590,710);
  text('d:',590,760);
  text(c,606,710);
  text(d,606,760);


  var det = round(-a*d+b*c,3)
  text('Determinant:',(a+c)/2*width/4+width/2,-(b+d)/2*height/4+height/2);
  text(det,(a+c)/2*width/4+width/2+80,-(b+d)/2*height/4+height/2)


}


function moverrojo(){
  state = 1;
}

function moververde(){
  c=1;
}


