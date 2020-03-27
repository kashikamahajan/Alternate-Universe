
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world,bg;



 
var sun;
var mercury;
var venus;
var earth;
var mars;
 function preload()
 {
      bg=loadImage("bg.jpg");
      
 }
 
function setup() {
    createCanvas(800, 800);

    // Create an instance of Engine, World
    engine=Engine.create();
    world=engine.world;

   
    mercury=new Planet(300,350,35,35);
    mercury.depth=1;
    mercury.image=loadImage("mi.png");

    venus=new Planet(300,250,40,40);
    venus.image=loadImage("vi.png");

   
    earth =new Planet(550,200,65,45);
    earth.image=loadImage("ei.png");

    mars =new Planet(600,600,65,70);
    mars.image=loadImage("mmi.png");

    sun=new Sun(400,400,100,100);
    sun.depth=2;
    sun.debug=true;

   
}

function draw() {
    background(bg);  
    
    
    mercury.display();
    venus.display();
    earth.display();
    mars.display();
    sun.display();
   
  }

  
