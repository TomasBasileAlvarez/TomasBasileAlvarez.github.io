var sliderx;
var slidery;
var d;
var sliderang;
var h;

function setup(){
  createCanvas(530,700);
  background(200);
  fill(240);
  quad(0,500,0,700,530,700,530,500);
  sliderx = createSlider(50, 450, 210);
  sliderx.position(300, 520);
  slidery = createSlider(100, 400, 180);
  slidery.position(300, 560);
  sliderang = createSlider(0, 360, 60);
  sliderang.position(300, 600);
}

function draw() {
 angleMode(DEGREES);
 background(200);
 fill(240);
 quad(0,500,0,700,530,700,530,500);
 stroke(0);
 strokeWeight(2);
 for (var i=0; i<5; i++){
  line(0,100*i+50,width,100*i+50);
 }
 stroke(0);
 fill(0);
 strokeWeight(1);
 text("x Position:",220,530);
 text(sliderx.value()/100,450,530);
 text("y Position:",220,570);
 text((slidery.value()-50)/100,450,570);
 text("Angle:",220,610);
 text(sliderang.value(),450,610);



 if (sliderang.value() < 180){
  var esquina1x = sliderx.value() + 50 *cos(sliderang.value());
  var esquina1y = slidery.value() - 50 *sin(sliderang.value());
  var esquina2x = sliderx.value() - 50 *cos(sliderang.value());
  var esquina2y = slidery.value() + 50 *sin(sliderang.value());
} else {
  var esquina1x = sliderx.value() - 50 *cos(sliderang.value());
  var esquina1y = slidery.value() + 50 *sin(sliderang.value());
  var esquina2x = sliderx.value() + 50 *cos(sliderang.value());
  var esquina2y = slidery.value() - 50 *sin(sliderang.value());
}




  stroke(0);
  fill(0);
  strokeWeight(8);
  point(sliderx.value(),slidery.value());

  lineacercana = ceil((slidery.value())/100)*100-50;

  // d
  stroke(0,50,200);
  fill(0,50,200);
  strokeWeight(1.5);
  d = abs(lineacercana - slidery.value());
  line(sliderx.value(),slidery.value(), sliderx.value(), lineacercana);


  stroke(100);
  fill(100);
  strokeWeight(0.7);
  line(0,slidery.value(), width , slidery.value());

  // h
  //stroke(153,0,153);
  //fill(153,0,153);
  //strokeWeight(1.5);
  //if (slidery.value() < lineacercana){
    //line(esquina2x,esquina2y,esquina2x,slidery.value());
    //h =  abs(slidery.value() - esquina2y);
  //} else{
    //line(esquina1x,esquina1y,esquina1x,slidery.value());
    //h =  abs(slidery.value() - esquina1y);
  //}

  strokeWeight(0.8);
  stroke(0);
  fill(0);
  text("Distance from the center of the needle to the closest line",20,650);
  strokeWeight(1.4)
  stroke(0,50,200);
  fill(0,50,200);
  text("(d):", 385, 650 );
  strokeWeight(1);
  text(d/100,410,650);


  //strokeWeight(0.8);
  //stroke(0);
  //fill(0);
  //text("Altura desde la punta más cercana a un renglón hasta el centro de la aguja",20,670);
  //strokeWeight(1.4)
  //stroke(153,0,153);
  //fill(153,0,153);
  //text("(h):", 425, 670 );
  //strokeWeight(1);
  //text(h/100,450,670);

  strokeWeight(3);

  if (floor((esquina2y+50)/100) != floor((esquina1y+50)/100)) {
       stroke(0,150,50);
       line(esquina1x, esquina1y, esquina2x, esquina2y);
     } else {
       stroke(200,0,50);
       line(esquina1x, esquina1y, esquina2x, esquina2y);
     }




}
