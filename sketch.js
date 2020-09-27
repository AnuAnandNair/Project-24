
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper1;
var ground1;
var bucket1;
//var bucket2,bucket3;

function setup() {
	createCanvas(1600, 700);

	//rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(800,670,1600,20);

	paper1=new paper(200,450,40);

	bucket1=new bucket(1200,650);
	//create bucket directly
	//bucket1= new bucket(800,590,200,10)
	//bucket2=new bucket(700,540,10,100);
	//bucket3=new bucket(900,540,10,100);	
}


function draw() {
  
  //rectMode(CENTER);
  background(0);
 
  Engine.update(engine);

  ground1.display();
  paper1.display();
  bucket1.display();
  //bucket2.display();
  //bucket3.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}

}

