var speed,weight;
var car,wall,deformation;

function setup() {
  createCanvas(1200,600);
  speed = random(50,90);
  weight = random(400,1400);
  car = createSprite(400, 200, 50, 50);
  car.velocity.x = speed;
  car.shapecolor = 225;

  wall = createSprite(1100,200,60,height/2);
  wall.shapecolor = 225;
}


function draw() {
  background ("black");
  if(wall.x - car.x<(car.width+wall.width)/2)
  {
car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22509;
if(deformation>180)
{
car.shapeColor = "red";
}
if(deformation<180 && deformation>100)
{
car.shapeColor = "yellow";
} 
if(deformation<100)
{
car.shapeColor = "green";
}
}
  
  drawSprites();
}