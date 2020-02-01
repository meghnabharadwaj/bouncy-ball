const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine, world;
var ground;
var object;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
   engine=Engine.create();
   world=engine.world;
   var objectOptions={
       isStatic:true
   };
   object=Bodies.rectangle(200,390,400,20,objectOptions);
   World.add(world,object);
   console.log(object.type);
   console.log(object.position.x);
   console.log(object.position.y);
   var ballOptions={
       restitution:1.0
   };

   ball= Bodies.circle(200,100,20,ballOptions);
   World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,50);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);
}