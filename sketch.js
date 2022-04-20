var wall1, wall2, wall3, wall4;
var princess
var fireBall1, fireBall2, fireBall3, fireBall4, fireBall5, fireBall6;
var life=10;

function setup() {
    createCanvas(1000, 600);
    wall1=createSprite(500,50,400,10);
    wall2=createSprite(500,300,400,10);
    wall3=createSprite(300,175,10,255);
    wall4=createSprite(700,175,10,255);

    princess=createSprite(320,180,20,20);
    princess.shapeColor="purple";

    fireBall1=createSprite(360,100,25,25);
    fireBall1.shapeColor="yellow";
    fireBall2=createSprite(420,270,25,25);
    fireBall2.shapeColor="yellow";
    fireBall3=createSprite(470,100,25,25);
    fireBall3.shapeColor="yellow";
    fireBall4=createSprite(520,270,25,25);
    fireBall4.shapeColor="yellow";
    fireBall5=createSprite(570,100,25,25);
    fireBall5.shapeColor="yellow";
    fireBall6=createSprite(630,270,25,25);
    fireBall6.shapeColor="yellow";

    fireBall1.velocityY=5
    fireBall2.velocityY=-5
    fireBall3.velocityY=5
    fireBall4.velocityY=-5
    fireBall5.velocityY=5
    fireBall6.velocityY=-5

    
}

function draw() {
    background(220);
    text("vidas restantes"+life,20,20)
    if(keyDown("right_Arrow")){
        princess.x=princess.x+2
    }
    if(keyDown("left_Arrow")){
        princess.x=princess.x-2
    }
    fireBall1.bounceOff(wall2);
    fireBall1.bounceOff(wall1);
    fireBall2.bounceOff(wall2);
    fireBall2.bounceOff(wall1);
    fireBall3.bounceOff(wall2);
    fireBall3.bounceOff(wall1);
    fireBall4.bounceOff(wall2);
    fireBall4.bounceOff(wall1);
    fireBall5.bounceOff(wall2);
    fireBall5.bounceOff(wall1);
    fireBall6.bounceOff(wall2);
    fireBall6.bounceOff(wall1);

    if(princess.isTouching(fireBall1)||princess.isTouching(fireBall2)||princess.isTouching(fireBall3)||princess.isTouching(fireBall4)||princess.isTouching(fireBall5)||princess.isTouching(fireBall6)){
        princess.x=320;
        princess.y=180;
        life= life-1;
    }

    if(life<=0){
        console.log("game over")
        gameOver();
    }

    drawSprites();
}
function gameOver(){
    swal({
        title: `Game Over`,
        text:"Gracias por jugar",
        imageUrl:"https://img2.freepng.es/20180413/pye/kisspng-magic-the-gathering-jace-the-mind-sculptor-jace-magician-5ad13d0bb21e48.0319448315236620917296.jpg",
        imageSize: "180x180",
        confirmButtonText: "jugar de nuevo",
        function (isConfirm){
            if(isConfirm){
                location.reload();
            }
        }
    })   
}