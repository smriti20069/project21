var canvas;
var music;
var block1,block2,block3,block4,ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(0,580,360,30);
block1.shapeColor="purple";
block2=createSprite(295,580,360,30);
block2.shapeColor="red";
block3=createSprite(515,580,360,30);
block3.shapeColor="blue";
block4=createSprite(740,580,360,30);
block4.shapeColor="orange";



    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40);
ball.shapeColor="white";
ball.velocityX=4;
ball.velocityY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor="purple";
        music.play();
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor="blue";
        music.play();
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor="orange";
        music.play();
    }
    if(block2.isTouching(ball)){
        ball.shapeColor="black";
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    }
    drawSprites();
}
