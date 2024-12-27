
let tot = 1000;
let ran = 5;

let ax = [];
let ay = [];


function setup() {


  createCanvas(500, 500);
  for ( let i = 0; i < tot; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(30);

  button = createButton('Start');
  button.position(350,470 );
  button.mousePressed(begin);

  button = createButton('Reset');
  button.position(440,470 );
  button.mousePressed(reset);

}
let a = 0;

function draw() {
  if (a==1){
  background(20);

  for ( let i = 1; i < tot; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  ax[tot - 1] += random(-ran, ran);
  ay[tot - 1] += random(-ran, ran);

  ax[tot - 1] = constrain(ax[tot - 1], 0, width);
  ay[tot - 1] = constrain(ay[tot - 1], 0, height);

  for ( let j = 1; j < tot; j++ ) {
    let val = j / tot * 204.0 + 51;
    stroke(val,val/2,val/3+j/500);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
  }else{
    background(30);
  }


}

function begin(){
  a = 1;
}

function reset(){
  for ( let i = 0; i < tot; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
}