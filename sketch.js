
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground,r1,r2,r3;


function setup() {
	createCanvas(1600, 800);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,40);

	ground = new Ground(width/2,670,width,20);

	r1 = new Dustbin(1310,600,20,100);

	r2 = new Dustbin(1110,600,20,100);

	r3 = new Dustbin(1210,650,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);		
  background(0);
  
  paper.display(); 
  ground.display();
  r1.display();
  r2.display();
  r3.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


