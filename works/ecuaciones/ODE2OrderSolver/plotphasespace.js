var p;
let h = 0.01;
let t = 0;
let x = 0;
let y = 0;
let tot = 5000;
let xrange=10;
let yrange=10;
let lasta;
let lastb;
let lastc;
let lastd;
let lastx0;
let lasty0;
let lastr;

function setup()  {

  createCanvas(500,800);


  cr = createSlider(0.1,100,15,0.1);
  cr.position(50, 550);
  cr.style('width','80px');

  cx0 = createSlider(-xrange,xrange,0.5,0.02);
  cx0.position(200,600);
  cx0.style('width','80px');


  cy0 = createSlider(-yrange,yrange,0.5,0.02);
  cy0.position(200,700);
  cy0.style('width','80px');

  //parametros que quiza se puedan usar para algunas ecuaciones

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
  r = cr.value();

  if (a!=lasta){
    camouse();
  }
    if (b!=lastb){
    camouse();
  }
    if (c!=lastc){
    camouse();
  }
    if (d!=lastd){
    camouse();
  }
    if (x0!=lastx0){
    camouse();
  }
    if (y0!=lasty0){
    camouse();
  }
    if (r!=lastr){
    camouse();
  }

  h = r/tot;



  background(51);
  fill(200);
  stroke(200);
  strokeWeight(1);
  rect(0,500,500,300);

  fill(40,200,50);
  stroke(40,200,50);

  strokeWeight(5);
  y0p = (1-(y0+yrange)/(2*yrange)) * (height-300);
  x0p = (1-(x0+xrange)/(2*xrange)) * (height-300);

  point(0,x0p);

  point(0,y0p);

  x = x0;
  y = y0;

  strokeWeight(1);




  while(t<= r){
    xvieja = x;
    yvieja = y;

    [x,y] = step(a,b,c,d,h,x,y,t);

    fill(40,200,50);
    stroke(40,200,50);
    line((t-h)*width/r,
     (1-(xvieja+xrange)/(2*xrange)) * (height-300),
      t*width/r,(1-(x+xrange)/(2*xrange)) * (height-300));

    fill(200,40,50);
    stroke(200,40,50);
    line((t-h)*width/r,
     (1-(yvieja+yrange)/(2*yrange)) * (height-300),
      t*width/r,(1-(y+yrange)/(2*yrange)) * (height-300));


      t+=h;

  }
  t=h;
  // for (var i = 0; i < tot; i++) {
  //     xvieja = x;
  //     yvieja = y;

  //     [x,y] = step(a,b,c,d,h,x,y,t);

  //     line((xvieja+xrange)/(2*xrange) * width, 
  //       (1-(yvieja+yrange)/(2*yrange)) * (height-300),
  //       (x+xrange)/(2*xrange) * width,
  //       (1-(y+yrange)/(2*yrange)) * (height-300));


  //     t+=h
  // }






  lasta = a;
  lastb = b;
  lastc = c;
  lastd = d;
  lastx0 =x0;
  lasty0 = y0;
    

}


function F(a,b,c,d,x,y,t){
  res1 = y;
  res2 = a*cos(b**2*t)-c**2*x-2*d*y;
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

function camouse(){
  t=h;
}
