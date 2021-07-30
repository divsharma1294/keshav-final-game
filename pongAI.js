//create the ballpongAI, playerPaddle and computerPaddle as sprite objects
class Pongai{
  constructor(){

  }

display() {
  //clear the screen
  background("white");
  
    edges=createEdgeSprites();
  
  //place info text in the center
  if (gameState1 === "serve") {
    text("Press Space to Serve",150,180);
    //background(255)
  }
   
  //display scores
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ballpongAI's y position
  computerPaddle.y = ballpongAI.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  
  //create edge boundaries
  //make the ballpongAI bounce with the top and the bottom edges
  createEdgeSprites();
  ballpongAI.bounceOff(edges[2]);
  ballpongAI.bounceOff(edges[3]);
  ballpongAI.bounceOff(playerPaddle);
  ballpongAI.bounceOff(computerPaddle);
 
  
  //serve the ballpongAI when space is pressed
  if (keyDown("space") &&  gameState1 === "serve") {
    ballpongAI.velocityX = 3;
    ballpongAI.velocityY = 4;
    gameState1= "play";
    //background(255)
  }
  
 
  //reset the ballpongAI to the centre if it crosses the screen
  if(ballpongAI.x > 400 || ballpongAI.x <0) {
    
    if(ballpongAI.x > 400) {
      compScore = compScore + 1;
    }
    
    if(ballpongAI.x < 0) {
      playerScore = playerScore + 1;
    }
    
    ballpongAI.x = 200;
  ballpongAI.y = 200;
  ballpongAI.velocityX = 0;
  ballpongAI.velocityY = 0;
    gameState1 = "serve";
  }
  
  if (playerScore === 5 || compScore === 5){
    gameState1 = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState1 === "over") {
    gameState1 = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}


}
