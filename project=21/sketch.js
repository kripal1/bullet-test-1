var bullet,wall ,thickness;

var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(900,1500);
  thickness=random(22,83);

 bullet=createSprite(50,200,50,5);
  bullet.shapeColor=(225);
  bullet.velocityX=speed;

  wall=createSprite(120, 200, thickness, height/2);
  wall.shapeColor="white";

  
}
function draw() {
  background(0);  



  drawSprites();
}

// function isTouching()
// if (car.x-wall.x<car.width/2+wall.width/2 &&
//   wall.x-car.x<car.width/2+wall.width/2 &&
//   car.y-wall.y<car.height/2+wall.height/2 && 
//   wall.y-car.y<car.height/2+wall.height/2
//   )
//   {
// if (deformation=0.5*weight*speed*speed/22500 <80)
// car.shapeColor="green";
// }
// else{
//   car.shapeColor="red";
// }






