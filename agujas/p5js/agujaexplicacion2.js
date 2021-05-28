var sliderd;
var sliderang;
var h;
var x = 265;

function setup(){
  createCanvas(530,400);
  background(200);
  fill(240);
  quad(0,200,0,400,530,400,530,200);
  sliderd = createSlider(0, 50, 20);
  sliderd.position(300, 220);
  sliderang = createSlider(0, 180, 60);
  sliderang.position(300 ,260 );
}

function draw() {
  angleMode(DEGREES);
  background(200);
  fill(240);
  quad(0,200,0,400,530,400,530,200);
  stroke(0);
  strokeWeight(2);
  for (var i=0; i<2; i++){
   line(0,100*i+50,width,100*i+50);
  }
  stroke(0);
  fill(0);
  strokeWeight(0.8);
  text("Distance from the center of the needle to the line(d):",20,235);

  text(sliderd.value()/100,450,235);
  text("Angle with respect to the horizontal (t) :",90,275);
  text(sliderang.value(),450,275);

  var esquina1x = x + 50 *cos(sliderang.value());
  var esquina1y = 50 + sliderd.value() - 50 *sin(sliderang.value());
  var esquina2x = x - 50 *cos(sliderang.value());
  var esquina2y = 50 + sliderd.value() + 50 *sin(sliderang.value());


  //punto centro
  stroke(0);
  fill(0);
  strokeWeight(8);
  point(x,sliderd.value()+50);


  //linea horizontal
  stroke(100);
  fill(100);
  strokeWeight(0.7);
  line(0,sliderd.value()+50, width , sliderd.value()+50);



  // h
  stroke(153,0,153);
  fill(153,0,153);
  strokeWeight(1.5);
  line(esquina1x,esquina1y,esquina1x,50+sliderd.value());
  h =  abs(50+sliderd.value() - esquina2y);


  // d
  stroke(0,50,200);
  fill(0,50,200);
  strokeWeight(1.5);
  line(x,sliderd.value()+50, x, 50);




  strokeWeight(0.8);
  stroke(0);
  fill(0);
  text("Distance from the center of the needle to the closest line",20,350);
  strokeWeight(1.4)
  stroke(0,50,200);
  fill(0,50,200);
  text("(d):", 385, 350 );
  strokeWeight(1);
  text(sliderd.value()/100,410,350);


  strokeWeight(0.8);
  stroke(0);
  fill(0);
  text("Height from the point of the needle to the center of the needle",20,370);
  strokeWeight(1)
  stroke(153,0,153);
  fill(153,0,153);
  text("(h): sin(t)/2 = ", 425, 370 );
  strokeWeight(1);
  text(h/100,500,370);



  strokeWeight(3);

  if (sliderd.value() <= 50*abs(sin(sliderang.value())) ) {
       stroke(0,150,50);
       line(esquina1x, esquina1y, esquina2x, esquina2y);
     } else {
       stroke(200,0,50);
       line(esquina1x, esquina1y, esquina2x, esquina2y);
     }



}
