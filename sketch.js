var movingRect, fixedRect;



function setup() {
  createCanvas(800,800);

 movingRect=createSprite(400,300,50,80);
 movingRect.shapeColor="white";
 movingRect.debug=true;

 fixedRect=createSprite(400,400,50,80);
 fixedRect.shapeColor="white";
 fixedRect.debug=true;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x <movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else {
    movingRect.shapeColor="white";
    fixedRect.shapeColor="white";
  }
  rectMode(CENTER);
  rect (200,200,50,50) ;
  drawSprites();
}