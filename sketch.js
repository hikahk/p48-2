var ball,ballimg,pong,pongimg,back,backimg;
var score=0
var hit,checkpoint,over
var life = 3,lifeimg
var gameState=0
var form
var ballg
var touch=0
var life1,life1img
var life2,life2img
var life3,life3Img
var life=3
var rest,restimg,over,overimg
var ground
function preload(){

ballimg=loadImage("ball.png")
pongimg=loadImage("pong.png")
backimg=loadImage("top.png")
hit=loadSound("hit.wav")
checkpoint=loadSound("checkpoint.wav")
over=loadSound("over.wav")
life1img=loadImage("life1.PNG")
life2img=loadImage("life2.PNG")
life3img=loadImage("life3.png")
restimg=loadImage("restart.png")
overimg=loadImage("gameOver.png")
}
function setup() {

  createCanvas(displayWidth,displayHeight-10);
  pong=createSprite(displayWidth/2,displayHeight/1.2)
  pong.setVelocity(0,0)
  pong.addImage(pongimg)
  pong.setCollider("circle",0,0,60)
  life1=createSprite(50,50)
  life1.addImage(life1img)
  life1.scale=0.5
  life1.visible=false
  life2=createSprite(60,50)
  life2.addImage(life2img)
  life2.scale=0.5
  
  life3=createSprite(displayWidth/9,50)
  life3.addImage(life3img)
  life3.scale=0.5
  life3.visible=false
  ground=createSprite(displayWidth,displayHeight*1.5,displayWidth*2,displayHeight)
life1.visible=false
life2.visible=false
form=new Form();
ballg=new Group();
rest=createSprite(displayWidth/2,displayHeight/2)
rest.addImage(restimg)
over=createSprite(displayWidth/2,displayHeight/2.5)
over.addImage(overimg)

}

function draw() {
  background("blue");
  console.log(gameState)
  image(backimg, -350,-150,displayWidth*1.5,displayHeight*1.5)
  textSize(20)
  fill("pink")
text("SCORE   "  + score,displayWidth/1.2,displayHeight/7)
  if(gameState===0){

  form.display();
 
  rest.visible=false
  over.visible=false
pong.visible=false

  }
else if(gameState===1){
  
pong.x=mouseX;
  



if(ballg.isTouching(ground)){
  
  life=life-1
  life1.visible=false
  }

if(life===3){
life3.visible=true
life1.visible=false
life2.visible=false
}
if(life===2){

  life2.visible=true
  life3.visible=false
  life1.visible=false
}

if(life===1){
  life2.visible=false
  life1.visible=true
  life3.visible=false
}

if(life===0){

  gameState=2
  

}
rest.visible=false
over.visible=false
pong.visible=false;
if(ballg.isTouching(pong)){
  score=score+1
ballg[0].destroy();
hit.play();

}






//pong.debug=true

  pong.visible=true
  spawnball();
}
else if(gameState===2){
  if (touches.length > 0) {
  if (rest.overlapPoint(touches[0].x, touches[0].y)) {
    gameState=0;
    touches = []

    
  }
}

if(mousePressedOver(rest) ){

  gameState=0
    
  }
ballg.destroyEach();
  pong.visible=false
rest.visible=true
over.visible=true


 }

  
  drawSprites();
}



function spawnball(){
if(frameCount%80===0){


ball=createSprite(random(30,displayWidth-40),-10)




ball.setVelocity(0,5)

ball.scale=0.2
ball.addImage(ballimg)
ball.debug=true
ball.setCollider("circle",0,0,5)
ballg.add(ball);
ballg.lifetime=displayHeight+100
if(score%5===0){

  ball.velocityY+=2
}
} 
}

