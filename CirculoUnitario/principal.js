function setup() {
  createCanvas(500, 700);
  background(140);

  frameRate(50);


  createstuff();
  thsli = createSlider(0,360,60);
  thsli.position(100,520);
  thsli.style('width','80px');

  
}

function createstuff(){



  fill(240);
  stroke(240);
  background(140);

  strokeWeight(1);
  circle(250,250,250);
  stroke(250);
  fill(200);
  quad(0,500,0,700,500,700,500,500);

  stroke(0);
  fill(0);
  strokeWeight(2);
  line(0,500,500,500);
  line(0,700,500,700);
  line(500,0,500,700);
  strokeWeight(1);

  line(0,250,500,250);
  line(250,0,250,500);
  line(377,240,377,260);
  line(123,240,123,260);
  line(437,240,437,260);
  line(63,240,63,260);
  text('1',378,266);
  text('1.5',438,266);
  text('-1',111,266);
  text('-1.5',40,266);
  text('0',255,265);

  line(240,377,260,377);
  line(240,123,260,123);
  line(240,437,260,437);
  line(240,63,260,63);
  text('1',266,385);
  text('1.5',266,438);
  text('-1',266,120);
  text('-1.5',266,60);


}
function draw(){
  let th = thsli.value()*1000*3.1415926535/180;

  createstuff()
  fill(20,20,20);
  xcor = 250+125*cos(th/1000);
  ycor = 250-125*sin(th/1000);
  strokeWeight(6);
  point(xcor,ycor);
  strokeWeight(2)

  stroke(200,20,20);
  line(xcor,250,xcor,ycor);

  stroke(20,200,20);
  line(250,ycor,xcor,ycor);

  stroke(0,0,100,50);
  line(250,250,xcor,ycor);

  arc(250,250,50,50,-th/1000,0);


  thred = round(th*180/3141.5926535,5);

  text('Angle:', 200, 550);
  text(thred,260,550);
  text('Degrees', 300,550);
  text()



  noStroke();
  fill(200,20,20);
  text('Sine:', 200, 580);
  num = round(sin(th/1000),5);
  text(num,260,580);


  fill(20,200,20);
  text('Cosine:', 200, 610);
  nume = round(cos(th/1000),5);
  text(nume,260,610);


}