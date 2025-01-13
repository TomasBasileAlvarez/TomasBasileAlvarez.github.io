let state =2;
let drawing = [];
let a = 2;
let b = 2;
let c = 2;
let d = 2;

function setup(){
  state=0;
  createCanvas(700,700);
  background(0);
  stroke(200);
  line(100,0,100,500);
  line(100,500,900,500);
  line(600,490,600,510);
  line(90,3,110,3);
  noStroke();
  fill(250);
  text('0', 90,510);
  text('1', 605,515);
  text('1', 85,15);

  dr = createButton('Dibujar');
  dr.position(100,650);
  dr.mousePressed(change0);
  nex = createButton('Siguiente');
  nex.position(300,650);
  nex.mousePressed(change1);
}

   
//vaciar drawing, dibujar ejes, state =0
function change0(){
   drawing=[];
   background(0);
   stroke(200);

   line(100,0,100,500);
   line(100,500,900,500);
   line(600,490,600,510);
   line(90,3,110,3);
   noStroke();
   fill(250);
   textSize(12);
   text('0', 90,510);
   text('1', 605,515);
   text('1', 85,15);
   state = 0;
 }

//cambiar estado a 1. Hace a = 0
function change1(){
  state = 1;
  a=0;
 }

function draw(){
  background(0);
  dibuja();

//se puede dibujar, agregamos los puntos a drawing
if(state==0){
  if (mouseIsPressed){
    let x = [(mouseX-100)/500, (500-mouseY)/500];
    drawing.push(x);
  }
  stroke(255);
  noFill();
  beginShape();
  for (let v of drawing){
    point(v[0]*500+100,-v[1]*500+500);
  } 
  endShape();

  }else if(state==1){
    if(a <= 1){
      muevea();
    }
  }

}


function dibuja(){
  for (let k = 0; k< drawing.length; k++){
    stroke(250);
    strokeWeight(1);
    point(drawing[k][0]*500+100,-drawing[k][1]*500+500);
  }
  stroke(200);
  line(100,0,100,500);
  line(100,500,900,500);
  line(600,490,600,510);
  line(90,3,110,3);
  noStroke();
  fill(250);
  textSize(12);
  text('0', 90,510);
  text('1', 605,515);
  text('1', 85,15);
}


function muevea(){
    reset();
    push();
    stroke(200,20,20);
    strokeWeight(2);
    translate(600,500);
    rotate(PI);


    for (let k = 0; k< drawing.length; k++){
      point(drawing[k][0]*500*(1-a*2/3) + a*500*2/3,drawing[k][1]*500*(1-a*2/3));
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
    textSize(20);
    text('Escalar por 1/3', 150,50);

  }







function f1k(x){
  return [x[0]/3, x[1]/3];
  }

function f2k(x){
  return [0.5*x[0]/3- 0.86603*x[1]/3 + 1/3 , x[0]*0.86603/3+0.5*x[1]/3];
}
function f3k(x){
  return [0.5*x[0]/3 + 0.86603*x[1]/3 + 1/2 , -x[0]*0.86603/3+0.5*x[1]/3 + 0.28868];
}
function f4k(x){
  return [x[0]/3+2/3, x[1]/3];
}













function reset(){


  // background(0);


  push();
  stroke(250);
  strokeWeight(2);
  translate(100,500);
  // rotate(PI);


  for (let k = 0; k< drawing.length; k++){
    point(drawing[k][0]*500,drawing[k][1]*500);
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














//   for (let k = 0; k< drawing.length; k++){
//     stroke(250);
//     strokeWeight(1);
//     point(drawing[k][0]*500+100,-drawing[k][1]*500+500);
//   }

//   if(state==0){
//     if (mouseIsPressed){
//        let x = [(mouseX-100)/500, (500-mouseY)/500];
//        drawing.push(x);
//        }
//        stroke(255);
//        noFill();
//        beginShape();
//        for (let v of drawing){
//         point(v[0]*500+100,-v[1]*500+500);
//        } 
//       endShape();
//   }


//   if(state==1){

//     if (a <= 1){

//     push();
//     stroke(200,20,20);
//     strokeWeight(2);
//     translate(600,500);
//     rotate(PI);


//     for (let k = 0; k< drawing.length; k++){
//       point(drawing[k][0]*500*(1-a*2/3) + a*500*2/3,drawing[k][1]*500*(1-a*2/3));
//     }
//     pop();

//     if (a==1){
//       a=2;
//       b=0;
//     }
//     a += 0.02;
//     if (a>0.98){
//       if (a<1.5){
//       a=1;
//     }
//     }
//     noStroke();
//     fill(200,20,20);
//     textSize(20);
//     // text('Scale by 1/3', 150,50);
//     }


//   if (b <= 1){
//     reset();
//     push();
//     stroke(20,200,20);
//     strokeWeight(2);
//     translate(600,500);
//     rotate(PI);


//     for (let k = 0; k< drawing.length; k++){
//       point(drawing[k][0]*500*(1-b*5/6) + 0.86603*drawing[k][1]*500*(b*1/3) + 500*b/2 , -0.86603*ser[k][0]*500*(b*1/3) + ser[k][1]*500*(1-b*5/6)+500*b*0.28868);
//     }
//     pop();


//     if (b==1){
//       b=2;
//       c=0;
//     }
//     b += 0.02;
//     if (b>0.98){
//       if (b<1.5){
//       b=1;
//     }
//     }
//     noStroke();
//     fill(20,200,20);
//     textSize(20);
//     // text('Scale by 1/3, rotate 60 degrees, translate by 1/3', 150,50);
//     }

//   if (c<=1){
//     reset();
//     push();
//     stroke(20,20,200);
//     strokeWeight(2);
//     translate(600,500);
//     rotate(PI);

//     for (let k = 0; k< drawing.length; k++){
//       point(drawing[k][0]*500*(1-c*5/6) - 0.86603*drawing[k][1]*500*(c*1/3) + 500*c/3 , 0.86603*ser[k][0]*500*(c*1/3) + ser[k][1]*500*(1-c*5/6));  
//     }
//     pop();

//     if (c==1){
//       c=2;
//       d=0;
//     }
//     c += 0.02;
//     if (c>0.98){
//       if (c<1.5){
//       c=1;
//     }
//     }
//     noStroke();
//     fill(50,50,250);
//     textSize(20);
//     // text('Scale by 1/3, rotate -60 degrees, translate by 1/2 + sqrt(3)/6 i', 150,50);
//   }

//   if (d<=1){
//     reset();
//     push();
//     stroke(20,200,200);
//     strokeWeight(2);
//     translate(600,500);
//     rotate(PI);


//     for (let k = 0; k< drawing.length; k++){
//       point(drawing[k][0]*500*(1-d*2/3) , drawing[k][1]*500*(1-d*2/3));  
//     }
//     pop();

//     if (d==1){
//       d=2;
//     }
//     d += 0.02;
//     if (d>0.98){
//       if (d<1.5){
//       d=1;
//       actualiza();
//     }
//     }
  
//     noStroke();
//     fill(50,250,250);
//     textSize(20);
//     // text('Scale by 1/3, translate by 2/3', 150,50);
//     }

//   }
  

// }

// function actualiza(){
//   l = drawing.length;
//   if (l < 40000){
//     drawing = agregark(drawing);
//   }
//   state=2;
//   background(0);


// }





// function agregar(ser){
//   let l = ser.length;
//   for (let j = Math.floor(l/3); j<l; j++){
//     ser = ser.concat([f1(ser[j])], [f2(ser[j])], [f3(ser[j])], [f4(ser[j])]);
//   }
//   return ser;
// }

// function f1(x){
//   return [x[0]/3, x[1]/3];
//   }  
// function f2(x){
//   return [0.5*x[0]/3- 0.86603*x[1]/3 + 1/3 , x[0]*0.86603/3+0.5*x[1]/3];
// }
// function f3(x){
//   return [0.5*x[0]/3 + 0.86603*x[1]/3 + 1/2 , -x[0]*0.86603/3+0.5*x[1]/3 + 0.28868];
// }
// function f4(x){
//   return [x[0]/3+2/3, x[1]/3];
// }



























// function setup(){
//   state=0;
//   createCanvas(700,700);
//   background(0);
//   stroke(200);
//   line(100,0,100,500);
//   line(100,500,900,500);
//   line(600,490,600,510);
//   line(90,3,110,3);
//   noStroke();
//   fill(250);
//   text('0', 90,510);
//   text('1', 605,515);
//   text('1', 85,15);


//   dr = createButton('Draw');
//   dr.position(100,650);
//   dr.mousePressed(change0);

//   nex = createButton('Next');
//   nex.position(300,650);
//   nex.mousePressed(change1);

// }


// function change0(){
//   drawing=[];
//   background(0);
//   stroke(200);

//   line(100,0,100,500);
//   line(100,500,900,500);
//   line(600,490,600,510);
//   line(90,3,110,3);
//   noStroke();
//   fill(250);
//   text('0', 90,510);
//   text('1', 605,515);
//   text('1', 85,15);
//   state = 0;
// }

// function change1(){
//   state = 1;
// }

// function agregark(ser){
//   let l = ser.length;
//   for (let j = Math.floor(0); j<l; j++){
//     ser = ser.concat([f1k(ser[j])], [f2k(ser[j])], [f3k(ser[j])], [f4k(ser[j])]);
//   }
//   return ser;
// }

// function f1k(x){
//   return [x[0]/3, x[1]/3];
//   }  
// function f2k(x){
//   return [0.5*x[0]/3- 0.86603*x[1]/3 + 1/3 , x[0]*0.86603/3+0.5*x[1]/3];
// }
// function f3k(x){
//   return [0.5*x[0]/3 + 0.86603*x[1]/3 + 1/2 , -x[0]*0.86603/3+0.5*x[1]/3 + 0.28868];
// }
// function f4k(x){
//   return [x[0]/3+2/3, x[1]/3];
// }





// function draw(){

//   for (let k = 0; k< drawing.length; k++){
//       stroke(250);
//       strokeWeight(1);
//       point(drawing[k][0]*500+100,-drawing[k][1]*500+500);
//     }
//   if (state == 0){

//     if (mouseIsPressed){
//       if(mouseX>150 && mouseX<100 && mouseY)
//     let x = [(mouseX-100)/500, (500-mouseY)/500];
//     drawing.push(x);
//     }
//     stroke(255);
//     noFill();
//     beginShape();
//     for (let v of drawing){
//       point(v[0]*500+100,-v[1]*500+500);
//     } 
//     endShape();


//   } else if (state == 1){
//     stroke(200);
//     strokeWeight(2);
    
//     l = drawing.length;
//     if (l < 40000){
//       drawing = agregark(drawing);
//     }
//     state=2;
//   }

// }