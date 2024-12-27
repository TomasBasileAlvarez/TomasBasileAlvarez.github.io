var p;

function setup()  {
  createCanvas(640,360);
  // Make a new Pendulum with an origin position and armlength
  p = new Pendulum(createVector(width/2,0),175,0.8);

}

function draw() {
  background(51);
  p.go();
}

function Pendulum(origin_, r_, damp_) {
  this.origin = origin_.copy();
  this.position = createVector();
  this.r = r_;
  this.angle = PI/3;

  this.aVelocity = 0.0;
  this.aAcceleration = 0.0;
  this.damping = damp_;   // Arbitrary damping
  this.ballr = 20.0;      // Arbitrary ball radius

  this.go = function() {
    this.update();
    this.display();
  };

  // Function to update position
  this.update = function() {
    var gravity = 0.4;                                               // Arbitrary constant
    this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle)- this.damping * this.aVelocity*0.001;  // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)
    this.aVelocity += this.aAcceleration;                            // Increment velocity
    this.angle += this.aVelocity;                                    // Increment angle
  };

  this.display = function() {
    this.position.set(this.r*sin(this.angle), this.r*cos(this.angle), 0);         // Polar to cartesian conversion
    this.position.add(this.origin);                                               // Make sure the position is relative to the pendulum's origin

    stroke(255);
    strokeWeight(2);
    // Draw the arm
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipseMode(CENTER);
    fill(127);
    // Draw the ball
    ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
  };
}