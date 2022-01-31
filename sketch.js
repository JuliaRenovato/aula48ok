const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var matrixInimigos = []

function preload() {
}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1000,1000,4000,80);
    player = new Player(0,0);
    plataforma1 = new Plataforma(200, 900, 200, 50);
    plataforma2 = new Plataforma(400, 800, 200, 50);
    plataforma3 = new Plataforma(600, 700, 200, 50);
    plataforma4 = new Plataforma(800, 600, 200, 50);
    plataforma5 = new Plataforma(1020, 700, 200, 50);
    inimigo = new Enemy(400,760);
    inimigo2 = new Enemy(600, 660);

    matrixInimigos.push(inimigo);
    matrixInimigos.push(inimigo2);
}

function draw(){
    background(180);
    Engine.update(engine);

    ground.display();
    player.display();
    plataforma1.display();
    plataforma2.display();
    plataforma3.display();
    plataforma4.display();
    plataforma5.display();
    inimigo.display();
    inimigo.setVelocity();
    inimigo2.display();
    inimigo2.setVelocity();

    for(var i = 0; i<matrixInimigos.length; i++){
        colisao(matrixInimigos[i]);
    }
}

function mouseDragged(){
}

function mouseReleased(){
}

function keyPressed(){
    if(keyCode == 39){
        Matter.Body.setVelocity(player.body, {x:4, y:0});
    }
    if(keyCode == 37){
        Matter.Body.setVelocity(player.body, {x:-4, y:0});
    }
    if(keyCode == 38){
        Matter.Body.setVelocity(player.body, {x:0, y:-10});
    }
}

function keyReleased(){
    Matter.Body.setVelocity(player.body, {x:0, y:0});
}

function colisao(inimigo){
    if(Matter.Collision.collides(player.body, inimigo.body)!=null){
        console.log("colidiu");
    }
}