var p;
let h = 0.01;
let t = 0;
let x = 0;
let y = 0;
let tot = 1000;

function setup()  {

  createCanvas(500,800);
  r = createSlider(0.1,10,5,0.1);
  r.position(50, 550);
  r.style('width','80px');
  // Make a new Pendulum with an origin position and armlength
  cx0 = createSlider(-1,1,0.5,0.02);
  cx0.position(200,600);
  cx0.style('width','80px');


  cy0 = createSlider(-1,1,0.5,0.02);
  cy0.position(200,700);
  cy0.style('width','80px');

  ca = createSlider(-10,10,random(-10,10),0.2);
  ca.position(350,550);
  ca.style('width','80px');

  cb = createSlider(-10,10,random(-10,10),0.2);
  cb.position(350,600);
  cb.style('width','80px');

  cc = createSlider(-10,10,random(-10,10),0.2);
  cc.position(350,650);
  cc.style('width','80px');

  cd = createSlider(-10,10,random(-10,10),0.2);
  cd.position(350,700);
  cd.style('width','80px');
}

function draw() {
  x0 = cx0.value()*r.value();
  y0 = cy0.value()*r.value();
  print(x0);


  a = ca.value();
  b = cb.value();
  c = cc.value();
  d = cd.value();


  background(51);
  fill(200);
  stroke(200);
  strokeWeight(1);
  rect(0,500,500,300);

  line(width/2,0,width/2,height-300);
  line(0,height-150-height/2,width,height-150-height/2);

  fill(40,200,50);
  stroke(40,200,50);

  strokeWeight(5);
  x0p = x0/r.value() * width/2 + width/2;
  y0p = -y0/r.value() * (height-300)/2 + (height-300)/2;
  point(x0p,y0p);

  x = x0;
  y = y0;


  strokeWeight(1);


  for (var i = 0; i < tot; i++) {
      xvieja = x;
      yvieja = y;

      [x,y] = step(a,b,c,d,h,x,y,t);
      point(x/r.value() * width/2 + width/2,
        -y/r.value() * (height-300)/2 + (height-300)/2);
      line(xvieja/r.value() * width/2 + width/2, 
        -yvieja/r.value() * (height-300)/2 + (height-300)/2,
        x/r.value() * width/2 + width/2,
        -y/r.value() * (height-300)/2 + (height-300)/2);
  }
    

}


function F(a,b,c,d,x,y,t){
  res1 = a*x+b*y;
  res2 = c*x+d*y;
  vec = [res1,res2];

  return(vec);
}

function step(a,b,c,d,h,x,y,t){
  k1x = h*F(a,b,c,d,x,y,t)[0];
  k1y = h*F(a,b,c,d,x,y,t)[1];
  k2x = h*F(a,b,c,d,x+k1x/2,y+k1y/2,t+h/2)[0];
  k2y = h*F(a,b,c,d,x+k1x/2,y+k1y/2,t+h/2)[1];
  k3x = h*F(a,b,c,d,x+k2x/2,y+k2y/2,t+h/2)[0];
  k3y = h*F(a,b,c,d,x+k2x/2,y+k2y/2,t+h/2)[1];
  k4x = h*F(a,b,c,d,x+k3x,y+k3y,t+h)[0];
  k4y = h*F(a,b,c,d,x+k3x,y+k3y,t+h)[1];

  x += 1/6*(k1x+2*k2x+2*k3x+k4x);
  y += 1/6*(k1y+2*k2y+2*k3y+k4y);
  return([x,y])


}

