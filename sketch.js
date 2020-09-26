var MovingRect, FixedRect;


function setup() {
  createCanvas(800,400);
  MovingRect = createSprite(100, 200, 100, 50);
  FixedRect = createSprite(400, 200, 100, 50);
  FixedRect.shapeColor = "green";
  MovingRect.shapeColor = "green";
}

function draw() {
  background("black");  
  MovingRect.x = mouseX;
  MovingRect.y = mouseY;
  
  if((MovingRect.x - FixedRect.x < MovingRect.width / 2 + FixedRect.width / 2) && (FixedRect.x - MovingRect.x < MovingRect.width / 2 + FixedRect.width / 2) && (FixedRect.y - MovingRect.y < MovingRect.height / 2 + FixedRect.height / 2) && (MovingRect.y - FixedRect.y < MovingRect.height / 2 + FixedRect.height / 2)) {
      MovingRect.shapeColor = "red";
      FixedRect.shapeColor = "red";
  } else {
    FixedRect.shapeColor = "green";
    MovingRect.shapeColor = "green";
  }
  
  
  
  
  
  
  
  
  drawSprites();
}