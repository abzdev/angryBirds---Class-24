const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird1;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,500,50,50);
    box2 = new Box(300,500,50,50);
    box3 = new Box(100,400,50,50);
    box4 = new Box(300,400,50,50);
    box5 = new Box(200,350,50,50);
    ground = new Ground(200,590,400,20);

    log1 = new Log(200,450,300,10);
    log2 = new Log(200,350,300,10);
    log3 = new Log(250,330,105,10);
    log4 = new Log(150,330,105,10);

    pig1 = new Pig(200,500);
    pig2 = new Pig(200,400);

    bird1 = new Bird(mouseX,mouseY);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    ground.display();

    pig1.display();
    pig2.display();

    bird1.display();
    bird1.x = World.mouseX;
    bird1.y = World.mouseY;

    bird1.depth = box1.depth;
}