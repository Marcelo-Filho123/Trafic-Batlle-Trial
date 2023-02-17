var car1, car2, car1IMG, car2IMG;
var obstacle1, obstacle2, obstacle3;
var background, backgroundIMG;
var distance=0;

function preload(){
car1IMG = loadAnimation("Car1.gif");
car2IMG = loadAnimation("Car2.gif");
backgroundIMG = loadImage("Road.png");

}

function setup() {
  createCanvas(1200, 300);

  background=createSprite(100,150);
  background.addImage(backgroundIMG);
  background.velocityX = -5;

  car1 = createSprite(50,250);
  car1.addAnimation("car1", car1IMG);
  car1.scale = 0.3;

  car2 = createSprite(50,50);
  car2.addAnimation("car2", car2IMG);
  car2.scale = 0.3;

  
}

function draw() {
  

  
  

  if(keyDown("RIGHT_ARROW")){
    car1.x += 10;
  }
  if(keyDown("UP_ARROW")){
    car1.y -= 3;
  }
 if(keyDown("DOWN_ARROW")){
    car1.y += 3;
  }
  if(keyDown("LEFT_ARROW")){
    car1.x -= 3;
  }

  if(keyDown("D")){
    car2.x += 10;
  }
  if(keyDown("W")){
    car2.y -= 3;
  }
 if(keyDown("S")){
    car2.y += 3;
  }
  if(keyDown("A")){
    car2.x -= 3;
  }

  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
    
  distance = distance + Math.round(getFrameRate()/50);
  background.velocityX = -(6 + 2*distance/150);

  if(background.x < 0 ){
    background.x = width/2;
  }
}

