var box;

function setup() {
  createCanvas(400,400);
  background('yellow');
  box=createSprite(50,300,30,30);

}

function draw() 
{
  

  if(keyIsDown(RIGHT_ARROW)) 
  {
    background('red');
     
  }
  if(keyIsDown(LEFT_ARROW))
  {
    background('pink');
      
  }
  if(keyIsDown(UP_ARROW))
  {
    background('blue');
      
  }
  if(keyIsDown(DOWN_ARROW))
  {
    background('cyan');
      
  }
  drawSprites();
}




