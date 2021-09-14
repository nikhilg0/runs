var pathImg
var runnerImg
function preload(){
  //pre-load images
 pathImg = loadImage("path.png")
 runner = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage("path",pathImg)
  path.velocityY = 4;
  path.scale = 1.2
boy = createSprite(mouseX,350) 
boy.addAnimation("running", runner)
boy.scale = 0.05
}

function draw() {
  background(0);
  if(path.y > 500){
    path.y = height/2
  }
  boy.x = mouseX
drawSprites()
}
