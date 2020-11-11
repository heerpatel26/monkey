
var monkey , monkey_running,ground,obstacles,invisibleground,collide;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,invisibleblockGroup
var score
var gameState="play"
var survivalTime=0;
function preload(){
  
  
           monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)

   
   invisibleGround = createSprite(200,430,900,20);
  invisibleGround.velocityX=-3
  invisibleGround.visible = false;
 invisibleGround.x=invisibleGround.width/2;
  console.log(invisibleGround.x)
  
  monkey=createSprite(80,400,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
 

 monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
 foodGroup=new Group();
  obstacleGroup=new Group();
  invisibleblockGroup=new Group();
}


function draw() {
background(255)
  background("white")
  
stroke("white");
  textSize(20);
  fill("white")
  text("score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survaivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime,100,50)

  
 
  ground=createSprite(400,420,900,20)
  
  ground.velocity=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
 
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/2;
    }
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
   
    }
   
  monkey.velocityY = monkey.velocityY + 0.8
  
   
  monkey.collide(invisibleGround)
   
  foodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
   invisibleblockGroup.setLifetimeEach(-1)
     reswapawnobstacle();
  foodreswapan();
  drawSprites();
 
}
function foodreswapan(){
  
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,300,40,10);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
  
 
 
}

function reswapawnobstacle(){
  
  
  
  
  
   if (frameCount % 80 === 0) {
  var obstacle=createSprite(200,400,900,20)
obstacle.velocityX = -(6 + score/100);
    obstacle.x = Math.round(random(80,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 800;
     obstacleGroup.add(obstacle);
   }   
}



