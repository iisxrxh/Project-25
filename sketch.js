
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var side, side2, side3;
var ground;
var ball;
var dustbin;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


    ball = new Ball(150, 635,70)
	side = new sides(930,590,20, 205)
    side2 = new sides(1170,590,20, 205)
	side3 = new sides(1050,640,230, 20)
	dustbin = new Dustbin(1050,600,300, 200)



	ground = new Ground(600, 650, 1200, 20)
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  ball.display();
  ground.display();

  side.display();
  side2.display();
  side3.display();

  dustbin.display();




 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-200})
    
	}
}



