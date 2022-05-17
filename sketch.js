var sans,sansImg
var heart,heartImg
var boneImg,blueBoneImg,upwardBoneImg
var wall1,wall2,wall3,wall4
var bttn1,bttn2,bttn3
var sansLife = 100,heartLife = 100
var gameState = "start"
var rand,rand2
var rnd = 0
var attack = 0

function preload() {
  sansImg = loadImage("assets/sans.webp")
  heartImg = loadImage("assets/heart.png")
  bone = loadImage("assets/bone.webp")
  blueBoneImg = loadImage("assets/blue bone.png")
  upwardBoneImg = loadImage("assets/upward bone.webp")
  sans_won = loadImage('sans won.webp')
}

function setup() {
  createCanvas(1000,800)
  sans = createSprite(500,180,50,50)
  sans.addImage(sansImg)
  sans.scale = .5
  wall1 = createSprite(320,460,5,250)
  wall2 = createSprite(680,460,5,250)
  wall3 = createSprite(500,333,360,5)
  wall4 = createSprite(500,583,360,5)
  heart = createSprite(500,450,20,20)
  heart.addImage(heartImg)
  heart.scale = 0.02
  bttn = createImg("assets/fight button.png")
  bttn.position(90,540)
  bttn2 = createImg("assets/fight_button_blue.png")
  bttn2.position(400,540)
  bttn3 = createImg("assets/fight_button_red.png")
  bttn3.position(700,540)
}


function draw() {
  background("black")
  if(keyDown(UP_ARROW)){
    heart.y = heart.y - 6
  }
  if(keyDown(DOWN_ARROW)){
    heart.y = heart.y + 6
  }
  if(keyDown(LEFT_ARROW)){
    heart.x = heart.x - 6
  }
  if(keyDown(RIGHT_ARROW)){
    heart.x = heart.x + 6
  }
  heart.bounceOff(wall1)
  heart.bounceOff(wall2)
  heart.bounceOff(wall3)
  heart.bounceOff(wall4)

  if(sansLife <= 0){
    sans.addImage(sans_won)
      swal({
        title: `Game Over`,
        text: "You won"+ "\n" +  "You escaped the Mountain",
        iman: "sans won.webp",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
  }
  if(rnd === 1){
    spawnObstacle1()
  }
  console.log(rnd)


  push();
    fill("yellow");
    rect(450,  290, 100, 20);
    fill("lime");
    rect(450,  290, sansLife, 20);
    noStroke();
    pop();

    bttn.mouseClicked(bttn1Press)
    bttn2.mouseClicked(bttn2Press)
    bttn3.mouseClicked(bttn3Press)

    if(sansLife <= 0){
      gameState = "end"
    }

  drawSprites()
  
}

function bttn1Press(){
  sansLife = sansLife - 15
  rnd = rnd +1
}

function bttn2Press(){
  rand = Math.round(random(0,100))
  if(rand <= 60){
  sansLife = sansLife - 40
  rnd = rnd +1
  }
}

function bttn3Press(){
  rand2 = Math.round(random(0,100))
  if(rand2 <= 20){
  sansLife = sansLife - 75
  rnd = rnd +1
  }
}

function spawnObstacle1 (){
  if(frameCount% 80 === 0){
    var ob1 = createSprite(680,500,83,38)
    ob1.addImage(upwardBoneImg)
    ob1.scale = 0.1
  }
}