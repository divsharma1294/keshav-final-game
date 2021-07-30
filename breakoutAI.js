class Breakoutai{
    constructor(){

    }
    

display() {
  background("cadetblue")
  
    edges=createEdgeSprites();

    bricks = createGroup();
    
    createBrickRow(65, "red");
    createBrickRow(65+29, "orange");
    createBrickRow(65+29+29, "green");
    createBrickRow(65+29+29+29, "yellow");
  textSize(20);
  text("Score: "+score,40,47);
  
  paddle.x = World.mouseX;
  
  if(paddle.x < 60)
  {
    paddle.x = 60;
  }
    
  if(paddle.x > 340)
  {
    paddle.x = 340;
  }

drawSprites();
  

 
  ballbkAI.bounceOff(edges[2]);
  ballbkAI.bounceOff(edges[3]);
  ballbkAI.bounceOff(edges[1]);
  ballbkAI.bounceOff(edges[0]);
  ballbkAI.bounceOff(paddle);
 brickHit(brick);
  
}


 

 keyPressed()
{
  if (keyCode===32){
  ballbkAI.velocityX = 10;
  ballbkAI.velocityY = 10;
  }
}
createBrickRow(y, color) {
  for(var c=0; c<6; c++)
  {
    brick = createSprite(65+54*c,y,50, 25);
    brick.shapeColor = color;
    bricks.add(brick);
  }


}



brickHit(brick) {
  brick.destroy();
  score = score + 5;
   
 }
}