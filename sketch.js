
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivaltime=survivaltime+1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   ground=createSprite(400,350,900,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
    
  
  
}


function draw() {
  
  background("white");
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  textSize(20);
  text("survival time",survivaltime,350,10);
  
  if(keyDown("space") ) {
        monkey.velocityY = -13;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
    
    banana1();
    obstacles();
  
    drawSprites();
  
}

function banana1(){
  if(frameCount%80===0) {
    banana=createSprite(400,20,303,30);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=300;
    
    FoodGroup.add(banana);
  
  }}

function obstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(400,340,303,30);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=300;
    
    obstacleGroup.add(obstacle);
    
    
    
  }}



