
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground,r1,r2,r3;


function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,250,50);

	ground = new Ground(800,790,1600,15);

	r1 = new Dustbin(910,710,20,100);

	r2 = new Dustbin(1110,710,20,100);

	r3 = new Dustbin(1010,760,200,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  
  paper.display(); 
  ground.display();
  r1.display();
  r2.display();
  r3.display();
   
  keyPressed();
  drawSprites();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-80});
	}
}


