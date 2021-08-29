var pathImage,powerImage,RunnerImage
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  RunnerImage=loadImage("Runner-1.png,Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
path.addImage(pathImg);
path.velocityY=3
Runner=createSprite(200,200,10,20)
Runner=addImage(RunnerImage)
invisibleGround=createSprite(200,390,400,10)
invisibleGround.visible=false
}

function draw() {
  background(0);




if(path.y>400){
  path.y=height/2
}
if (keyDown(mouse)) {
  
}
drawSprites() 
}
