var bg,bgImg
var horse1,horse1Img
var horse2,horse2Img
var player1score=0
var player2score=0

function preload(){
    bgImg=loadImage("images/bg.png")
   horse1Img=loadAnimation("images/horse_b.PNG","images/horse_m.PNG")
   horse2Img=loadAnimation("images/horse1.png","images/horse2.png","images/horse3.png","images/horse4.png")
   horse1startImage=loadImage("images/horse_1.png")
   horse2startImage=loadImage("images/horse1.png")
}
function setup(){
canvas=createCanvas(displayWidth,displayHeight)
bg=createSprite(1600,300,displayWidth*5,displayHeight)
bg.addImage(bgImg);
horse1=createSprite(100,240,10,10)
horse1.addImage(horse1startImage)
horse1.scale=0.15
horse2=createSprite(100,350,10,10)
horse2.addImage(horse2startImage)
horse2.scale=0.32
}
function draw(){
background("blue");
if(keyDown ("RIGHT_ARROW")){
      horse1.x=horse1.x+5
      horse1.addAnimation("running",horse1Img)

}
if(keyDown ("K")){
    horse2.x=horse2.x+5
    horse2.addAnimation("running",horse2Img)
}
camera.position.x=horse1.x
camera.position.y=displayHeight/2
camera.position.x=horse2.x
camera.position.y=displayHeight/2
console.log(horse1.x)

drawSprites();
fill("black")
textSize(25)
text(player1score,bg.x,50)
text(player2score,bg.x+20,50)
if(horse1.x>3050||horse2.x>3050){
    text("Game Over",3050,500)
}

}