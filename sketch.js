var tom,jerry;
var tomSittingImg,tomReadytoEatImg,TomStandingImg;
var jerryGoingToEatImg,jerryStandingImg,jerryThumbsUpImg,jerrySearchingImg;
var garden;
function preload() {
    garden = loadImage("garden.png");
    tomSittingImg = loadImage("cat1.png");
    jerryStandingImg = loadImage("mouse2.png")
    tomReadyToEatImg = loadImage('cat2.png')
}

function setup(){
    createCanvas(600,600);
    garden = createSprite(0,0,600,600)
    garden.addImage(garden);
    garden.scale = 3; 

    tom = createSprite(480,220,20,50);
    tom.addImage(tomSittingImg);
    tom.scale = 1;

    jerry = createSprite(490,210,20,50);
    jerry.addImage(jerryStandingImg);
    jerry.scale = 0.7;
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

keyPressed();
    drawSprites();

}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
   // tom.addAnimation("tomReadyToEatImg",cat2.png); 
    tom.changeAnimation("tomReadyToEatImg");
}  

if(tom.x - jerry.x<(cat.width - jerry.width)/2);
{
    //jerry.addAnimation("jerrySearchingImg",mouse4.png);
    jerry.changeAnimation("jerrySearchingImg");

    //tom.addAnimation("tomStandingImg",cat4.png);
    tom.changeAnimation("tomStandingImg")
}


}
