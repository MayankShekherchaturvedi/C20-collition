var fixedRect,movingRect;




function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(300,400,50,100);
fixedRect.shapeColor = "green";
movingRect = createSprite(700,700,50,50);
movingRect.shapeColor = "yellow";

}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
   fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
   movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
   fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "red";
}
 
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "yellow";
}



  drawSprites();






}