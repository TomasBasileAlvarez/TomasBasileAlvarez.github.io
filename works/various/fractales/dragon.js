let ser = [[0,0]];
ser = crear(ser);

let a =2;
let b =2;

function setup(){
  createCanvas(900,800);

  reset();

  trans1 = createButton('transformación 1');
  trans1.position(100, 700);
  trans1.mousePressed(t1);

  trans2 = createButton('transformación 2');
  trans2.position(250, 700);
  trans2.mousePressed(t2);

  res = createButton('resetear');
  res.position(250, 750);
  res.mousePressed(reset);
}



function crear(ser){
  for (let i = 0; i <= 10; i++){
    ser = agregar(ser);
  }
  return ser;
}

function agregar(ser){
  let l = ser.length;
  for (let j = Math.floor(l/2); j<l; j++){
    ser = ser.concat([f1(ser[j])], [f2(ser[j])]);
  }
  return ser;
}

function f1(x){
  return [x[0]/2-x[1]/2, x[0]/2 + x[1]/2];
  }  
function f2(x){
  return [-x[0]/2-x[1]/2+1, x[0]/2 - x[1]/2];
}


function t1(){
  a=0;
  b=2;
}

function t2(){
  b=0;
  a=2;
}


function draw(){

  if (a <= 1){
    reset();
    push();
    stroke(200,20,20);
    strokeWeight(2);
    translate(600,500);
    rotate(PI);


    for (let k = 0; k<ser.length; k++){
      point(ser[k][0]*500*(1-a/2)-ser[k][1]*500*a/2,ser[k][1]*500*(1-a/2) + ser[k][0]*500*a/2);
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
    text('Escalar por 1/2, rotar -60 grados y trasladar por 1', 370,50);

    }

  if (b<=1){
    reset();
    push();
    stroke(20,200,20);
    strokeWeight(2);
    translate(600,500);
    rotate(PI);


    for (let k = 0; k< ser.length; k++){
      point(ser[k][0]*500*(1-3*b/2)-ser[k][1]*500*b/2+1000*b/2,ser[k][1]*500*(1-3*b/2) + ser[k][0]*500*b/2);
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
    text('Escalar por 1/2, rotar 60 grados', 370,50);

    }
}


function reset(){
  background(0);


  push();
  stroke(250);
  strokeWeight(1.5);
  translate(600,500);
  rotate(PI);


  for (let k = 0; k< ser.length; k++){
    point(ser[k][0]*500,ser[k][1]*500);
  }
  pop();

  stroke(200);
  strokeWeight(2);
  line(100,0,100,500);
  line(100,500,900,500);
  line(600,490,600,510);
  line(90,3,110,3);

  noStroke();
  fill(250);
  text('0', 90,510);
  text('1', 605,515);
  text('1', 85,15);

}
