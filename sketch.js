
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    roof = new Ground(600,height,1200,20);
    
    bob1 = new Bob(200,200,70,70);
    bob2 = new Bob(200,400,70,70);
    bob3 = new Bob(200, 600,70,70);
    bob4 = new Bob(200,800,70,70);
    bob5 = new Bob(200,1000,70,70);
    rope1= new rope(bob1.body,roof.body,-bobDiameter*2,0)
  rope2= new rope(bob2.body,roof.body,-bobDiameter*2,0)
  rope3= new rope(bob3.body,roof.body,-bobDiameter*2,0)
  rope4= new rope(bob4.body,roof.body,-bobDiameter*2,0)
  rope5= new rope(bob5.body,roof.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  bob1.collide(bob2||bob3||bob4);
  bob2.collide(bob3||bob4);
  bob3.collide(bob4);

    bob1.display();
    bob2.display();
    roof.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope5.display();
    rope3.display();
    rope4.display();
    if(keyDown("left_arrow")){
      bob5.x=100;
      bob5.y=100;
    }

  drawSprites();
 
}



