var p;
let h = 0.01;
let t = 0;
let x = 0;
let y = 0;
let tot = 5000;

function setup()  {

  createCanvas(500,800);
  r = createSlider(0.1,10,5,0.1);
  r.position(50, 550);
  r.style('width','80px');
  // Make a new Pendulum with an origin position and armlength
  cx0 = createSlider(0,1,0.5,0.02);
  cx0.position(200,600);
  cx0.style('width','80px');


  cy0 = createSlider(0,1,0.5,0.02);
  cy0.position(200,700);
  cy0.style('width','80px');

  ca = createSlider(0,1,random(0,1),0.05);
  ca.position(350,550);
  ca.style('width','80px');

  cb = createSlider(0,1,random(0,1),0.05);
  cb.position(350,600);
  cb.style('width','80px');

  cc = createSlider(0,1,random(0,1),0.05);
  cc.position(350,650);
  cc.style('width','80px');

  cd = createSlider(0,1,random(0,1),0.05);
  cd.position(350,700);
  cd.style('width','80px');
}

function draw() {
  x0 = cx0.value();
  y0 = cy0.value();


  a = ca.value();
  b = cb.value();
  c = cc.value();
  d = cd.value();


  background(51);
  fill(200);
  stroke(200);
  strokeWeight(1);
  rect(0,500,500,300);

  fill(40,200,50);
  stroke(40,200,50);

  strokeWeight(5);
  x0p = x0 * width;
  y0p = (1-y0) * (height-300);
  point(x0p,y0p);

  x = x0;
  y = y0;

  strokeWeight(1);


  for (var i = 0; i < tot; i++) {
      xvieja = x;
      yvieja = y;

      [x,y] = step(a,b,c,d,h,x,y,t);

      line(xvieja * width, 
        (1-yvieja) * (height-300),
        x * width,
        (1-y) * (height-300));
  }
    

}


function F(a,b,c,d,x,y,t){
  res1 = a*x-b*x*y;
  res2 = d*x*y-c*y;
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

