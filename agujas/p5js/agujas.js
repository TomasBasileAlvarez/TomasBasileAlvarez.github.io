var tot = 0;
var buenos = 0;
function setup() {
 createCanvas(530, 700);
 background(200);
 strokeWeight(2.5);
 line(0,0,0,700);
 line(0,0,530,0);
 line(530,0,530,700);
 line(0,499,530,499);
 fill(240);
 quad(0,500,0,700,530,700,530,500);
 stroke(0);
 fill(0);

 strokeWeight(1);

 text("N = Total number of needles thrown:",280,520);
 text(tot,480,520);

 text("n = needles that cut a line:",280,540);
 text(buenos,480,540);

 text("Approximation of pi (2*N/n): ",280,560);
 text(Math.round(2*tot/buenos,5),480,560);

 text("Error percentage: ",280 , 580 );
 text(abs(3.14159265-2*tot/buenos)/3.14159265*100,485,580 )

 text("%", 475,580);
 button1 = createButton("Throw 1");
 button1.position(20,610 );
 button1.mousePressed(agrega1);

 button5 = createButton("Throw 5");
 button5.position(120,610 );
 button5.mousePressed(agrega5);

 button10 = createButton("Throw 10");
 button10.position(220,610);
 button10.mousePressed(agrega10);

 button100 = createButton("Throw 100");
 button100.position(330,610 );
 button100.mousePressed(agrega100);

 button500 = createButton("Throw 200");
 button500.position(20,650 );
 button500.mousePressed(agrega200);

 button5000 = createButton("Throw 500");
 button5000.position(130,650);
 button5000.mousePressed(agrega500);

 buttonres = createButton("Reset");
 buttonres.position(230,650);
 buttonres.mousePressed(resetear);
 strokeWeight(2.5);
 stroke(0)
 fill(0)
 for (var i=0; i<5; i++){
  line(0,100*i+50,width,100*i+50);
 }
 strokeWeight(1);

}



function Lineas(posx,posy,angu){
  this.x = posx;
  this.y = posy;
  this.angle = angu;
  this.esquina1x = posx - 50 *cos(angu);
  this.esquina1y = posy - 50 *sin(angu);
  this.esquina2x = posx + 50 *cos(angu);
  this.esquina2y = posy + 50 *sin(angu);
  //this.colors = function(){
    //if floor(this.esquina2x / 100) > floor(this.esquina1x / 100){
      //return color(0,255,0);
    //} else{
      //return color(255,0,0);
    //}
  //}
  this.display = function() {
    if (floor((this.esquina2y+50)/100) > floor((this.esquina1y+50)/100)) {
      stroke(0,150,50);
      line(this.esquina1x, this.esquina1y, this.esquina2x, this.esquina2y);
    } else {
      stroke(200,0,50);
      line(this.esquina1x, this.esquina1y, this.esquina2x, this.esquina2y);
    }
    strokeWeight(2.5);
    fill(240);
    stroke(240);
    quad(0,500,0,700,530,700,530,500);

    fill(0);
    stroke(0);
    line(0,499,530,499);
    strokeWeight(1);

    text("N = Total number of needles thrown:",280,520);
    text(tot,480,520);

    text("n = needles that cut a line:",280,540);
    text(buenos,480,540);

    text("Approximation of pi (2*N/n): ",280,560);
    text(Math.round(2*tot/buenos,5),480,560);

    text("Error percentage: ",280 , 580 );
    text(abs(3.14159265-2*tot/buenos)/3.14159265*100,485,580 )

    

    text("%", 470,580);
    line(530,0,530,700);
    line(0,700,530,700);
  };
}

function agrega1(){
  for (var p = 0; p < 1; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega5(){
  for (var p = 0; p < 5; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega10(){
  for (var p = 0; p < 10; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega100(){
  for (var p = 0; p < 100; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega200(){
  for (var p = 0; p < 200; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
     buenos = buenos + 1;
   }
   nuevo.display();
  }
}
function agrega500(){
  for (var p = 0; p < 500; p++){
   nuevo = new Lineas(random()*400+50,random()*300+100,random()*3.14159265);
   tot = tot+ 1;
   if (floor((nuevo.esquina2y+50)/100) > floor((nuevo.esquina1y+50)/100)){
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
  line(530,0,530,700);
  fill(200);
  stroke(200);
  strokeWeight(2.5);
  fill(0);
  stroke(0);
  line(0,499,530,499);


  for (var i=0; i<5; i++){
   line(0,100*i+50,width,100*i+50);
  }


  fill(0);
  stroke(0);
  strokeWeight(1);

  fill(240);
  quad(0,500,0,700,530,700,530,500);
  fill(0);
  text("N = Total de agujas lanzadas:",280,520);
  text(tot,480,520);

  text("n = Agujas que cortan un renglón:",280,540);
  text(buenos,480,540);

  text("Aproximación de Pi (2*N/n): ",280,560);
  text(2*tot/buenos,480,560);

  text("Porcentaje de error: ",280 , 580 );
  text(abs(3.14159265-2*tot/buenos)/3.14159265*100,485,580 )

  text("%", 470,580);
  line(530,0,530,700);
  line(0,700,530,700);

 }
