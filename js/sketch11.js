let rad = 30; 
let xpos, ypos; 

let xspeed = 2.8; 
let yspeed = 2.2; 

let xdirection = 1; 
let ydirection = 1; 

function setup() {
  createCanvas(192, 157);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);

  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  background(0);

  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // diana
  fill(255);
  ellipse(xpos, ypos, rad/1.1, rad/1.1);  
  fill(0);
  ellipse(xpos, ypos, rad/1.5, rad/1.5);
  fill(255);
  ellipse(xpos, ypos, rad/2, rad/2);
  fill(0);
  ellipse(xpos, ypos, rad/3, rad/3);
  fill(255);
  ellipse(xpos, ypos, rad/5, rad/5);

  // el·lipses exteriors

  fill(255,0,0);
  ellipse(xpos/4, ypos, rad/5, rad/5);  
  fill(0,255,0);
  ellipse(xpos*2, ypos, rad/5, rad/5);
  fill(0,0,255);
  ellipse(xpos, ypos*2, rad/5, rad/5);
  fill(255,255,0);
  ellipse(xpos, ypos/2, rad/5, rad/5);
  
}
