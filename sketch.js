var PLAY=1;
var END=0;
var gameState = PLAY;

var bg,bgImg;
var girl,girlImg;
var invisibleGround;
var zombie, zombieImg, Zombies;
var zombiesGroup;
var gameOver, gameOverImg;

function preload(){
bgImg = loadImage("forestFloor1.png")
girlImg = loadImage("Girl3.png")
zombieImg = loadImage("Zombie.png")
gameOverImg = loadImage("Game over sign.png")
}

function setup() {
 createCanvas(600,400);

 bg = createSprite(0,200);
 bg.addImage("forest",bgImg);
 bg.velocityX= -3;
 bg.scale=3

 girl = createSprite(250,300,70,40);
 girl.addImage("character",girlImg);
 girl.changeImage("character",girlImg);
 girl.scale=0.7
 
invisibleGround = createSprite(0,380,800,20);
invisibleGround.visible = false;
//girl.debug=true
zombiesGroup = new  Group();
}

function draw() {
 background(0);

if (gameState === PLAY){
   if (keyDown ("space")){
      girl.velocityY-=5
      girl.addImage("character",girlImg);
     
      girl.visible = true;
     }
     
     girl.velocityY = girl.velocityY + 0.8
    
    
    
    
     if (bg.x < 0){
    bg.x = bg.width/8
     }

     if (zombiesGroup.isTouching(girl)){
     gameState = END
    } 
}

 if (gameState === END){
   bg.velocityX = 0;
   zombiesGroup.setVelocityXEach(0);
   //zombie.velocityX = 0;
   zombiesGroup.setLifetimeEach(-1);

   gameOver = createSprite(300,200,50,40);
   gameOver.addImage("gameOver", gameOverImg);

}


 girl.collide(invisibleGround)
 zombieObstacles();
 drawSprites();
}

function zombieObstacles(){

   if (frameCount % 130 === 0){
     zombie = createSprite(600,370,80,70);
      zombie.addImage("zombie",zombieImg);
      zombie.velocityX = -4

      //var rand = Math.round(random(1,2));
      
      zombie.scale=0.6
      zombie.lifetime = 300

      zombiesGroup.add(zombie)
   }
}

