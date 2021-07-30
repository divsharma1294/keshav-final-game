class PongF{
    constructor(){

    }
    


display() {
  //clear the screen
  background("white");
  
     
    edges=createEdgeSprites();
  //place info text in the center
  if (gameStateA === "serve") {
    text("Press Space to Serve",150,180);
  }
   
  //display scores
  text(player2Score, 170,20);
  text(playerScore, 230,20);
  
  //make the player paddle move with the mouse's y position
  if(keyDown("s")){
    playerPaddle.y=playerPaddle.y+5
  }
  if(keyDown("w")){
    playerPaddle.y=playerPaddle.y-5
  }
  
  //AI for the computer paddle
  //make it move with the ballpongF's y position
  if(keyDown("down")){
    player2Paddle.y=player2Paddle.y+5
  }
  if(keyDown("up")){
    player2Paddle.y=player2Paddle.y-5
  }
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  
  //create edge boundaries
  //make the ballpongF bounce with the top and the bottom edges
  createEdgeSprites();
  ballpongF.bounceOff(edges[2]);
  ballpongF.bounceOff(edges[3]);
  ballpongF.bounceOff(playerPaddle);
  ballpongF.bounceOff(player2Paddle);
 
  
  //serve the ballpongF when space is pressed
  if (keyDown("space") &&  gameStateA === "serve") {
    //serve();
    ballpongF.velocityX = 3;
  ballpongF.velocityY = 4;
    gameStateA = "play";
  }
  
 
  //reset the ballpongF to the centre if it crosses the screen
  if(ballpongF.x > 400 || ballpongF.x <0) {
    
    if(ballpongF.x > 400) {
      compScore = compScore + 1;
    }
    
    if(ballpongF.x < 0) {
      playerScore = playerScore + 1;
    }
    
    ballpongF.x = 200;
  ballpongF.y = 200;
  ballpongF.velocityX = 0;
  ballpongF.velocityY = 0;
    gameStateA= "serve";
  }
  
  if (playerScore === 5 || player2Score === 5){
    gameStateA = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameStateA === "over") {
    gameStateA = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}







  

}