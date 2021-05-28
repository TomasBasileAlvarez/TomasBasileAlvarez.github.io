var tot = 0;
var buenos = 0;
function setup() {
 createCanvas(500, 700);
 background(200);
 strokeWeight(2.5);
 line(0,0,0,700);
 line(0,0,500,0);
 line(500,0,500,700);
 line(0,499,500,499);
 stroke(0,100,0);
 fill(0,100,0,10);
 circle(0,0,1000);
 fill(240);
 stroke(0);
 quad(0,500,0,700,500,700,500,500);
 stroke(0);
 fill(0);


 strokeWeight(1);

 text("N = Total number of points:",200,520);
 text(tot,400,520);

 text("n = Points inside the circle:",200,540);
 text(buenos,400,540);

 text("Area of whole Circle",200,560);
 text(4*buenos/tot,400,560);

 text("Error percentage: ",200 , 580 );
 text(abs(3.14159265-4*buenos/tot)/3.14159265*100,400,580 )

 text("%", 380,580);
 button1 = createButton("Add 1");
 button1.position(20,610 );
 button1.mousePressed(agrega1);

 button5 = createButton("Add 10");
 button5.position(120,610 );
 button5.mousePressed(agrega10);

 button10 = createButton("Add 100");
 button10.position(220,610);
 button10.mousePressed(agrega100);

 button100 = createButton("Add 200");
 button100.position(330,610 );
 button100.mousePressed(agrega200);

 button500 = createButton("Add 500");
 button500.position(20,650 );
 button500.mousePressed(agrega500);

 button5000 = createButton("Add 1000");
 button5000.position(130,650);
 button5000.mousePressed(agrega1000);

 buttonres = createButton("Reset");
 buttonres.position(230,650);
 buttonres.mousePressed(resetear);
 strokeWeight(2.5);
 stroke(0)
 fill(0)

 strokeWeight(2.5);

}



function Puntos(posx,posy){
  this.x = posx;
  this.y = posy;
  this.r = posx**2+posy**2;
  
  this.display = function() {
    if (floor(this.r) < 250000) {
      stroke(100,200,100);
      point(this.x, this.y);
    } else {
      stroke(250,50,50);
      point(this.x, this.y);
    }
    strokeWeight(2.5);
    fill(240);
    stroke(240);
    quad(0,500,0,700,500,700,500,500);

    fill(0);
    stroke(0);
    line(0,499,500,499);
    strokeWeight(1);

     text("N = Total number of points:",200,520);
     text(tot,400,520);

     text("n = Points inside the circle:",200,540);
     text(buenos,400,540);

     text("Area of whole Circle",200,560);
     text(4*buenos/tot,400,560);

     text("Error percentage: ",200 , 580 );
     text(abs(3.14159265-4*buenos/tot)/3.14159265*100,400,580 )
     text("%", 380,580);
     fill(240);
  stroke(240);
  quad(444,540,444,600,500,600,500,540);
  fill(0);
  stroke(0);
    

    line(500,0,500,700);
    line(0,700,500,700);
    strokeWeight(2.5);

  };
}

function agrega1(){
  for (var p = 0; p < 1; p++){
   nuevo = new Puntos(random()*500,random()*500);
   tot = tot+ 1;
   if  (floor(nuevo.r) < 250000) {
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega10(){
  for (var p = 0; p < 10; p++){
   nuevo = new Puntos(random()*500,random()*500);
   tot = tot+ 1;
   if  (floor(nuevo.r) < 250000) {
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega100(){
  for (var p = 0; p < 100; p++){
   nuevo = new Puntos(random()*500,random()*500);
   tot = tot+ 1;
   if  (floor(nuevo.r) < 250000) {
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega200(){
  for (var p = 0; p < 200; p++){
   nuevo = new Puntos(random()*500,random()*500);
   tot = tot+ 1;
   if  (floor(nuevo.r) < 250000) {
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega500(){
  for (var p = 0; p < 500; p++){
   nuevo = new Puntos(random()*500,random()*500);
   tot = tot+ 1;
   if  (floor(nuevo.r) < 250000) {
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega1000(){
  for (var p = 0; p < 1000; p++){
   nuevo = new Puntos(random()*500,random()*500);
   tot = tot+ 1;
   if  (floor(nuevo.r) < 250000) {
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function resetear(){
  tot = 0;
  buenos = 0;
  stroke(0);
  fill(200)
  quad(0,0,0,500,530,500,530,0);

  stroke(0);
  line(0,700,700,700);
  line(500,0,500,700);
  fill(200);
  stroke(200);
  strokeWeight(2.5);
  fill(0);
  stroke(0);
  line(0,499,500,499);
  stroke(0,100,0);
  fill(0,100,0,10); 
  circle(0,0,1000);



  fill(0);
  stroke(0);
  strokeWeight(1);

  fill(240);
  quad(0,500,0,700,500,700,500,500);
  fill(0);
  text("N = Total number of points:",200,520);
  text(tot,400,520);

  text("n = Points inside the circle:",200,540);
  text(buenos,400,540);

  text("Area of whole Circle",200,560);
  text(4*buenos/tot,400,560);

  text("Error percentage: ",200 , 580 );
  text(abs(3.14159265-4*buenos/tot)/3.14159265*100,400,580 )
  text("%", 380,580);
  fill(240);
  stroke(240);
  quad(440,540,440,600,500,600,500,540);
  fill(0);
  stroke(0);


  line(500,0,500,700);
  line(0,700,500,700);

 }