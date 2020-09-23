var bullet, wall, thichness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
 
  speed = random (223, 321);
  weight = random (30, 52);
  thichness = random (22, 83);

  bullet = createSprite (50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite (1200, 200, thichness, height/2);
  wall.shapeColor = color (80, 80, 80);

  

}

function draw() {
  background("black");  

  hasCollided(bullet, wall);

  if(hasCollided(bullet, wall)) {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed /(thichness * thichness *thichness);
    

    if(damage > 10) {
      wall.shapeColor = color (225, 0 , 0);
    }
    if (damage < 10) {
      wall.shapeColor = "green";
    }
    
  }

  
  
  drawSprites();
}