
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var part1
var part2
var part3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	part1=new Center(332,653,7,100)
	part2=new Center(403,705,150,7)
	part3=new Center(474,652.5,7,100)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  part1.display();
  part2.display();
  part3.display();
 
  
  drawSprites();
 
}



