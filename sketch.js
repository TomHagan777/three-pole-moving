let r = 0;

let line1x, line1y, line2x, line2y, line3x, line3y;

var line1width = 440;
var line1height = 3;

var line2width = 600;
var line2height = 3;

var line3width = 500;
var line3height = 3;

var line1Directionx = 1;
var line1Directiony = -1;
var line1speed = 0.5;

var line2Directionx = 1;
var line2Directiony = -1;
var line2speed = 0.5;

var line3Directionx = 1;
var line3Directiony = -1;
var line3speed = 0.5;

var canvas;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //canvas.parent("sketch-div");
  
  noStroke();
  rectMode(CENTER);
  
  line1x = 200;
  line1y = 100;
  
  line2x = width / 2;
  line2y = height / 2;
  
  line3x = width - 200;
  line3y = height - 50;
  
}

function draw() {
  background(255);
  
  // create motion
  line1x = line1x + (line1Directionx*line1speed);
  line1y = line1y + (line1Directiony*line1speed);
  
  line2x = line2x + (line2Directionx*line2speed);
  line2y = line2y + (line2Directiony*line2speed);
  
  line3x = line3x + (line3Directionx*line3speed);
  line3y = line3y + (line3Directiony*line3speed);
  


  // set boundary line blue
  if (line1x < 0){
    line1Directionx = line1Directionx*-1;
  }

  if (line1x > width){
    line1Directionx = line1Directionx*-1;
  }
  
  if (line1y > 0){
    line1Directiony = line1Directiony*-1;
  }
  
  if (line1y < height){
    line1Directiony = line1Directiony*-1;
  }
  
  // set boundary line red
  if (line2x < 0){
    line2Directionx = line2Directionx*-1;
  }

  if (line2x > width){
    line2Directionx = line2Directionx*-1;
  }
  
  if (line2y > 0){
    line2Directiony = line2Directiony*-1;
  }
  
  if (line2y < height){
    line2Directiony = line2Directiony*-1;
  }
  
  // set boundary line yellow
  if (line3x < 0){
    line3Directionx = line3Directionx*-1;
  }

  if (line3x > width){
    line3Directionx = line3Directionx*-1;
  }
  
  if (line3y > 0){
    line3Directiony = line3Directiony*-1;
  }
  
  if (line2y < height){
    line3Directiony = line3Directiony*-1;
  }

  r = r + 0.0025;

  //blue
  push();
  translate(line1x,line1y);
  rotate(r); 
  fill(0,0,200);
  rect(0,0,line1width,line1height);
  pop();
  
  //red
  push();
  translate(line2x,line2y);
  rotate(-r-0.04); 
  fill(220,0,0);
  rect(0,0,line2width,line2height);
  pop();

  //yellow
  push();
  translate(line3x,line3y);
  rotate(-r/1.3); 
  fill(255,210,0);
  rect(0,0,line3width,line3height);
  pop();
  
}




