
function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
  
  fill(255,0,0,95);
  ellipse(width/2.5+10, height/2, 100, 100);
  
  fill(255,0,0, 95);
  ellipse(width*0.6-10, height/2, 100, 100);

}

function draw() {
  
}

function mousePressed(){
  save('image.jpg');
}