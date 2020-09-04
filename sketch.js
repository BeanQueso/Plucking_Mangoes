
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500, 400, 300, 300);
	stone = new Stone(100, 600, 40, 40);
	ground = new Ground(400, 690, 800, 20);
	boy = new Boy(stone.body, {x:40, y:600});
	mango  = new Mangoes(700,400,20,20);
	mangoCon1 = new Boy(mango.body, {x:600, y:450});
	mango2  = new Mangoes(700,400,20,20);
	mangoCon2 = new Boy(mango2.body, {x:630, y:420});
	mango3  = new Mangoes(700,400,20,20);
	mangoCon3 = new Boy(mango3.body, {x:660, y:490});
	mango4  = new Mangoes(700,400,20,20);
	mangoCon4 = new Boy(mango4.body, {x:690, y:430});
	mango5  = new Mangoes(700,400,20,20);
	mangoCon5 = new Boy(mango5.body, {x:700, y:480});
	
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  stone.display();
  ground.display();
  boy.display();
  drawSprites();
mango.display();
mangoCon1.display();
mango2.display();
mangoCon2.display();
mango3.display();
mangoCon3.display();
mango4.display();
mangoCon4.display();
mango5.display();
mangoCon5.display();

 
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    boy.fly();
    
}
function isTouching(){
	
}



