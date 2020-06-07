
//Creating variables
var tom;
var ground;
var water,croc1,croc2,croc3,croc4;
var flag=1;
//Setup function
function setup() {
  createCanvas(400,800);
  ground = createSprite(200,400,400,1600);
  ground.shapeColor="brown"
  tom= createSprite(200, 700, 30, 30);
  
}
//draw function
function draw() {
 //background colour=Black
  background(0);  
  //Allowing tom to move in different directions
  /*if(keyDown(UP_ARROW)){
    tom.y=tom.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    tom.y=tom.y+2;
  }*/

  if(keyDown(LEFT_ARROW)){
    tom.x=tom.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    tom.x=tom.x+2;
  }

  ground.velocityY=+4;

  if(ground.y>800){
    ground.y=400;
  }
flag++;

  spawnWater();
  spawnCroc();
  drawSprites();
}
function spawnWater(){
  if(frameCount===100 || frameCount%500===0){
    water=createSprite(200,0,400,80);
    water.shapeColor="blue";
    water.velocityY=1.5;
    
   
   
  
  }
}
function spawnCroc(){
 if(frameCount===120 || frameCount%500===0){
      croc1=createSprite(400,water.y-20,20,20);
      croc2=createSprite(0,water.y+20,20,20);
      croc3=createSprite(450,water.y-20,20,20);
      croc4=createSprite(-40,water.y+20,20,20);
      croc1.shapeColor="green";
      croc1.velocityX=-1;
      croc1.velocityY=1.5;
      croc2.shapeColor="green";
      croc2.velocityX=1;
      croc2.velocityY=1.5;
      croc3.shapeColor="green";
      croc3.velocityX=-1;
      croc3.velocityY=1.5;
      croc4.shapeColor="green";
      croc4.velocityX=1;
      croc4.velocityY=1.5;


    }
}