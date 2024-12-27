let tot;
let buenos;
let lastx;
let lasty;
let aprox;

function setup()  {
  createCanvas(400,400);
  add = createButton('Add')
  add.position(300, 300);
  add.mousePressed(Add);

  num = createSlider(1,1000,1);
  num.position(100,300);
  num.style('width','80px');
  tot =0;
  buenos = 0;
  lastx=0;
  lasty=0;
  aprox = 0;


}


function draw() {
  aprox = sqrt(6*tot/buenos);
  background(51);
  textSize(12);

  fill(200);
  stroke(200);
  strokeWeight(0.3);
  text('total (N):',10,30);
  text(tot,65,30);


  text('Coprimes (n):',220,30);
  text(buenos,300,30);

  text('Last Pair:', 10,100);
  text(lastx, 100,100);
  text(lasty,250,100);

  text('Coprime?',10,130);
  text(coprime(lastx,lasty),100,130);  

  textSize(15);
  text('Approximation of Pi:',10,200);
  text('Sqrt(6N/n)',150,200);
  text(aprox,240,200);


  text(num.value(),130,290);




    

}


function coprime(a,b){
  smaller = min(a,b);
  for(let ind =2; ind<=smaller; ind++){
    if(a%ind==0 && b%ind==0){
      return(false);
    }
  }
  return(true);
}

function Add(){
  rep = num.value();

  for (i = 0; i < rep; i++) {
    a = floor(random(1,1000000));
    b = floor(random(1,1000000));
    lastx = a;
    lasty=b;

  if (coprime(a,b)){
    buenos+=1;
  }
  tot+=1

  }
}
