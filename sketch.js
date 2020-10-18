
var monkey , monkey_running,monkey_collided;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivaltime;
var ground, invisibleGround;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  

}



function setup() {
  createCanvas (400,400)
 ground = createSprite(200,380,800,20);
  ground.x = ground.width /2;
  ground.velocityX=-3;
  
   monkey = createSprite(50,160,20,50);
 monkey.addAnimation("running", monkey_running);
   
  
  
  
  monkey.scale=0.1;
 
  
  
  

  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
 
  survivaltime =0;
}


function draw() {
 
  background("white")
  text("survivaltime"+survivaltime,200,200)
  survivaltime=survivaltime+1;
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if (keyDown("space"))  {
      monkey.velocityY = -12 ;
      
    }
  
  //add gravity
   
   monkey.velocityY = monkey.velocityY + 0.4
   monkey.collide(ground);
   spawnbanana();
  //spawn the obstacle
  spawnobstacle();
 
  drawSprites();
}
function spawnbanana() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(200,120,80,50);
  banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}
function spawnobstacle() {
  //write code here to spawn the obstacles
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(800,350 ,40,10);
  
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 300;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    obstaclesGroup.add(obstacle);
  }
}








