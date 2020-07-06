var paper, ground,dustBin,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
    //create canvas
	createCanvas(800, 700);

	//create Engine
	engine = Engine.create();
    // create world
	world = engine.world;

	//packageBody = Bodies.circle(width/2,200,5, isStatic=false);
	//World.add(world, packageBody);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground = new Ground(600, height, 1200, 20);
	World.add(world, ground);
	
	//Create paper
	paper =  new Paper(130,130);
	HalfRect1=new HalfRect(250,610,20,100);
	HalfRect2=new HalfRect(500,610,20,100);
	HalfRect3=new HalfRect(375,650,230,20);
	Engine.run(engine);
  
}


function draw() {

	background(0)
	Engine.update(engine);
    paper.display();
	ground.display();
	HalfRect1.display();
	HalfRect2.display();
	HalfRect3.display();
	drawSprites();	
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:185,y:185});
	}
}

