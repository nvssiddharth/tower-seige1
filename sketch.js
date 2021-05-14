const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var sling1;
var polygon1,polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1100,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,260,200,10);
  stand2 = new Stand(890,160,200,10);
 
  box1= new Block(330,235,30,40);
  box2= new Block(360,235,30,40);
  box3= new Block(390,235,30,40);
  box4= new Block(420,235,30,40);
  box5= new Block(450,235,30,40);
  box6= new Block(360,195,30,40);
  box7= new Block(390,195,30,40);
  box8= new Block(420,195,30,40)
  box9= new Block(390,155,30,40);
  box10= new Block(830,135,30,40);
  box11= new Block(860,135,30,40);
  box12= new Block(890,135,30,40);
  box13= new Block(920,135,30,40);
  box14= new Block(950,135,30,40);
  box15= new Block(860,95,30,40);
  box16= new Block(890,95,30,40);
  box17= new Block(920,95,30,40);
  box18= new Block(890,55,30,40);

  polygon1 = Bodies.circle(100,200,20,{density:2,restitution:0.5});
  World.add(world,polygon1);

  sling1 = new Slingshot(polygon1,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30)
  
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box17.display();
  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise");
  box13.display();
  box14.display();
  box15.display();
  fill("grey");
  box16.display();
  sling1.display();
  box18.display();
   
  push ()
 imageMode (CENTER);
 image (polygon_img,polygon1.position.x,polygon1.position.y,40,40);
 pop ()

}

function mouseReleased(){
  sling1.fly();
 }

function mouseDragged(){
  Matter.Body.setPosition(polygon1,{x: mouseX , y: mouseY});
 }
 
 
 function keyPressed(){
    if(keyCode === 32){
  Matter.Body.setPosition(polygon1,{x:100,y:200});
  sling1.attach(polygon1);
    }
  }