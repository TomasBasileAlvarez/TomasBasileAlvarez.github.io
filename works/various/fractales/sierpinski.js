let ser = [[0,0]];
ser = crear(ser);

let a =2;
let b =2;
let c =2;

function setup(){
  createCanvas(700,700);

  reset();

  trans1 = createButton('transformation 1');
  trans1.position(100, 600);
  trans1.mousePressed(t1);

  trans2 = createButton('transformation 2');
  trans2.position(250, 600);
  trans2.mousePressed(t2);

  trans3 = createButton('transformation 3');
  trans3.position(400, 600);
  trans3.mousePressed(t3);


  res = createButton('reset');
  res.position(250, 650);
  res.mousePressed(reset);
}



function crear(ser){
  for (let i = 0; i <= 6; i++){
    ser = agregar(ser);
  }
  return ser;
}

function agregar(ser){
  let l = ser.length;
  for (let j = Math.floor(l/3); j<l; j++){
    ser = ser.concat([f1(ser[j])], [f2(ser[j])], [f3(ser[j])]);
  }
  return ser;
}

function f1(x){
  return [x[0]/2, x[1]/2];
  }  
function f2(x){
  return [x[0]/2 +1/2, x[1]/2];
}
function f3(x){
  return [x[0]/2 +1/4, x[1]/2 + 0.433013];
}

function t1(){
  a=0;
  b=2;
  c=2;
}

function t2(){
  b=0;
  a=2;
  c=2;
}

function t3(){
  c=0;
  a=2;
  b=2;
}


function draw(){

  if (a <= 1){
    reset();
    push();
    stroke(200,20,20);
    strokeWeight(2);
    translate(600,500);
    rotate(PI);


    for (let k = 0; k< ser.length; k++){
      point(ser[k][0]*500*(1-a/2) + a/2*500,ser[k][1]*500*(1-a/2));
    }
    pop();
    if (a==1){
      a=2;
    }

    a += 0.02;

    if (a>0.98){
      if (a<1.5){
      a=1;
    }
    }

    noStroke();
    fill(200,20,20);
    textSize(16);
    text('Scale by 1/2', 370,50);

    }

  if (b<=1){
    reset();
    push();
    stroke(20,200,20);
    strokeWeight(2);
    translate(600,500);
    rotate(PI);


    for (let k = 0; k< ser.length; k++){
      point(ser[k][0]*500*(1-b/2),ser[k][1]*500*(1-b/2));
    }
    pop();
    
    if (b==1){
      b=2;
    }

    b += 0.02;

    if (b>0.98){
      if (b<1.5){
      b=1;
    }
    }

    noStroke();
    fill(20,200,20);
    textSize(16);
    text('Translate by 1/2 and scale by 1/2', 370,50);

    }

  if (c<=1){
    reset();
    push();
    stroke(20,20,200);
    strokeWeight(2);
    translate(600,500);
    rotate(PI);


    for (let k = 0; k< ser.length; k++){
      point(ser[k][0]*500*(1-c/2)+c*500/4,ser[k][1]*500*(1-c/2) + c*0.433013*500);
    }
    pop();

    if (c==1){
      c=2;
    }
    c += 0.02;
    if (c>0.98){
      if (c<1.5){
      c=1;
    }
    }
    noStroke();
    fill(50,50,250);
    textSize(16);
    text('Translate by 1/4 in x dirction and sqrt(3)/4 in y and scale by 1/2', 110,50);

    }
}


function reset(){
  background(0);


  push();
  stroke(250);
  strokeWeight(2);
  translate(600,500);
  rotate(PI);


  for (let k = 0; k< ser.length; k++){
    point(ser[k][0]*500,ser[k][1]*500);
  }
  pop();

  stroke(200);
  strokeWeight(2);
  line(100,0,100,500);
  line(100,500,700,500);
  line(600,490,600,510);
  line(90,3,110,3);

  noStroke();
  fill(250);
  text('0', 90,510);
  text('1', 605,515);
  text('1', 85,15);

}

