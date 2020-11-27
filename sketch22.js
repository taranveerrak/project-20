//Engine, World, Bodies
//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var ground;
var ball;
function setup() 
{
    createCanvas(400,400);
    //createSprite(200, 200, 50, 50);

    myengine = Engine.create();
    myworld = myengine.world;

    var ground_options = {
      isStatic : true, density: 1.0,friction: 1.0
    }
    var ball_options=
    {
      restitution: 0.8
    }
    ball = Bodies.circle(200,10,20,ball_options);
    World.add(myworld,ball);
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(myworld,ground);
}
  
  function draw() 
{
    background(0);  
    Engine.update(myengine);
    ellipseMode(RADIUS);   
    ellipse(ball.position.x,ball.position.y,20,20);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    drawSprites();
}