
let numBalls = 750;
let balls = [];
let dim = 20;

let ene = 0;
let twidth = 800;
let subs = 50;
let max = 2;
let pdf = [];



function setup() {

  createCanvas(twidth+400, 400,P2D);
  cols = floor(twidth/(dim));
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      dim + dim*(i-floor(i/cols)*cols)  ,
      dim + dim*floor(i/cols),
      random(1),
      random(0.1),
      i,
    );  
  }
  // balls[numBalls] = new Ball(dim + dim*(numBalls-floor(numBalls/cols)*cols),
  //   dim + dim*floor(numBalls/cols), 4,2,numBalls); 
  // numBalls += 1;
  noStroke();
  fill(255, 204);
}

function draw() {
  background(0);

  ene = 0;

  for(let j=0; j<numBalls;j++){

    balls[j].collide();
    balls[j].move();
    balls[j].display();
  }

  for(let i = 0; i<subs;i++){
  pdf[i]=0;
}

  for(let j=0; j<numBalls;j++){
    velo = sqrt(balls[j].vx**2 + balls[j].vy**2)
    ene += velo**2/2;
    pos = floor(velo*subs/max);
    pdf[pos]+=1;

  }

  for(let k=0; k<subs-1; k++){
    push();
    fill(100,250,100);
    stroke(100,250,100);
    strokeWeight(2);
    velo = k*max/subs;
    velo1 = (k+1)*max/subs;
    e = 2.7182;
    line(twidth + 50+(width-twidth-100)*k/subs,350-pdf[k]*3,
      twidth + 50+(width-twidth-100)*(k+1)/subs,350-pdf[k+1]*3)
    stroke(0,0,250);
    
    line(twidth + 50+(width-twidth-100)*k/subs,
      350-3*velo*numBalls/(2*ene)*e**(-3*velo**2*numBalls/(4*ene))*8,
      twidth + 50+(width-twidth-100)*(k+1)/subs,
      350-3*velo1*numBalls/(2*ene)*e**(-3*velo1**2*numBalls/(4*ene))*8)

    pop();
  }

  textSize(100);
  ene = round(ene,3);
  text(ene,100,100);




}

class Ball {
  constructor(xin, yin, vxin, vyin,idin,col) {
  	this.px = xin;
    this.py = yin;
    this.vx = vxin;
    this.vy = vyin;
    this.id = idin; 
    this.diameter = dim;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {

      // let dista = p5.Vector.dot(p5.Vector.sub(this.pos,balls[i].pos),p5.Vector.sub(this.pos,balls[i].pos));
      // let dista = (balls[i].px-this.px)**2 + (balls[i].py-this.py)**2; 
      let dista = dist(this.px,this.py,balls[i].px,balls[i].py);
      let minDist = this.diameter/2;
      //   console.log(distance);
      //console.log(minDist);

      if (dista < minDist+1) {
        let dott = (this.vx-balls[i].vx)*(this.px-balls[i].px)+(this.vy-balls[i].vy)*(this.py-balls[i].py);
        let num = dott/dista**2;
        this.vx = this.vx - num*(this.px-balls[i].px);
        this.vy = this.vy - num*(this.py-balls[i].py);


        balls[i].vx = balls[i].vx + num*(this.px-balls[i].px)
        balls[i].vy = balls[i].vy + num*(this.py-balls[i].py)
      }
    }
  }

  move() {
    this.px += this.vx;
    this.py += this.vy;

    if (this.px + this.diameter / 2 > twidth) {
      this.px = twidth - this.diameter / 2;
      this.vx *= -1;
    } else if (this.px - this.diameter / 2 < 0) {
      this.px = this.diameter / 2;
      this.vx *= -1;
    }
    if (this.py + this.diameter / 2 > height) {
      this.py = height - this.diameter / 2;
      this.vy *= -1;
    } else if (this.py - this.diameter / 2 < 0) {
      this.py = this.diameter / 2;
      this.vy *= -1;
    }
  }

  display() {
    ellipse(this.px, this.py, dim/2, dim/2);
  }
}


