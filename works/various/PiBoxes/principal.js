let boxes=[];
let tam = 80;
let choq = 0;
let b0;
let b1;


function setup()  {
  createCanvas(600,600);
  add = createButton('Start')
  add.position(100, 10);
  add.mousePressed(reset);

  digits = createSlider(1,10,1);
  digits.position(10,10);
  digits.style('width','80px');


  boxes=[new box(100,0,100**(digits.value()-1),tam),
  new box(300,0,1,tam/5)];

}


function draw() {
  background(50);

  stroke(250);
  fill(250);
  strokeWeight(4);
  line(0,500,width-50,500);
  line(width-50,0,width-50,500);
  strokeWeight(0.4);
  text(digits.value(),10,50);
  text(choq,200,50);
  text(PI*10**(digits.value()-1),300,300);

  text('Big box mass in proportion to small mass:',10,80);
  text(boxes[0].masa,250,80);

  if (digits.value()<3){
    if (boxes[0].loca+boxes[0].len >= boxes[1].loca){
    b0 = boxes[0].velo;
    b1 = boxes[1].velo;
    boxes[0].velo = (boxes[0].masa-boxes[1].masa)/(boxes[0].masa+boxes[1].masa)*b0 + 2*boxes[1].masa/(boxes[0].masa+boxes[1].masa)*b1;
    boxes[1].velo = (boxes[1].masa-boxes[0].masa)/(boxes[0].masa+boxes[1].masa)*b1 + 2*boxes[0].masa/(boxes[0].masa+boxes[1].masa)*b0;
    choq +=1;
  }
  }

  if (digits.value()>=3){
    if (boxes[0].loca < width-50-boxes[0].len-boxes[1].len-2){
    if (boxes[0].loca+boxes[0].len >= boxes[1].loca){
    b0 = boxes[0].velo;
    b1 = boxes[1].velo;
    boxes[0].velo = (boxes[0].masa-boxes[1].masa)/(boxes[0].masa+boxes[1].masa)*b0 + 2*boxes[1].masa/(boxes[0].masa+boxes[1].masa)*b1;
    boxes[1].velo = (boxes[1].masa-boxes[0].masa)/(boxes[0].masa+boxes[1].masa)*b1 + 2*boxes[0].masa/(boxes[0].masa+boxes[1].masa)*b0;
    choq +=1;
  }
  }
    else{
        boxes[0].loca = width-50-boxes[1].len-boxes[0].len-2;
        boxes[1].loca = width-50- random(1,2);
        choq+=ceil(random(PI*10**(digits.value()-1)-choq-1));
      if(choq>=floor(PI*10**(digits.value()-1))-10){
        boxes[0].loca = width-50-boxes[1].len-boxes[0].len-3;
        boxes[0].velo = -0.5;
        boxes[1].velo = -0.3;
        choq= floor(PI*10**(digits.value()-1))-2;

      }
    }
  
  }


  for (let i = 0; i < 2; i++) {
    boxes[i].check();
    boxes[i].update();

    boxes[i].display();
  }





}

function reset(){
  boxes=[new box(100,1.5,100**(digits.value()-1),tam),
  new box(300,0,1,tam/5)];
  choq = 0;
}


class box{
  constructor(loca,velo,masa,len){
  this.loca = loca;
  this.velo = velo;
  this.masa = masa;
  this.len = len;
  }

  update(){
    this.loca += this.velo;
  }
  display(){
    stroke(200,this.len*3,200);
    fill(200,this.len*3,200);
    rect(this.loca,500-this.len-2,this.len,this.len);
  }
  check(){
    if(this.loca+this.len > width-50){
      this.loca = width-50-this.len;
      this.velo *=-1;
      choq += 1;
    }

  }
}



