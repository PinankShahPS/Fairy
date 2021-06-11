var starImg,bgImg,bgImg1,bgd;
var star, starBody;
var fairy,fairys,fairys1;
var fairy2,fairys2,fairys2;
var backsounds;
var inv;
var stars,stars2,stars3;
var starss;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	bgImg1 = loadImage("starryNight.jpg");

    //load animation for fairy here
	fairys=loadAnimation("fairyImage1.png","fairyImage2.png");
	fairys1=loadImage("fairy.png");
	fairys2=loadImage("fairy3.png");
	backsounds=loadSound("JoyMusic.mp3");
	starss=loadAnimation("stars1.png","stars2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	backsounds.loop();

	//create fairy sprite and add animation for fairy

	bgd=createSprite(400,375);
	bgd.addImage("BB",bgImg);
	bgd.addImage("bb2",bgImg1);
	bgd.scale=0.5;

	fairy=createSprite(100,600);
	fairy.addAnimation("F",fairys);
	fairy.addImage("F1",fairys1);
	fairy.scale=0.2;

	fairy2=createSprite(100,200);
	fairy2.addAnimation("F",fairys);
	fairy2.addImage("F3",fairys2);
	fairy2.scale=0.2;
	fairy2.visible=false;

	inv=createSprite(650,375,5,750);
	inv.visible=false;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	stars=createSprite(600,30);
	stars.addImage(starImg);
	stars.scale = 0.05;
	stars.visible=false;

	stars2=createSprite(400,100);
	stars2.addAnimation("SSS",starss);
	stars2.scale = 0.2;

	stars3=createSprite(200,150);
	stars3.addAnimation("SSS",starss);
	stars3.scale = 0.08;

	stars4=createSprite(600,160);
	stars4.addAnimation("SSS",starss);
	stars4.scale = 0.09;

	stars5=createSprite(100,300);
	stars5.addAnimation("SSS",starss);
	stars5.scale = 0.2;

	stars6=createSprite(700,300);
	stars6.addAnimation("SSS",starss);
	stars6.scale = 0.2;

	stars7=createSprite(545,200);
	stars7.addAnimation("SSS",starss);
	stars7.scale = 0.1;
	stars7.visible=false;
	}


function draw() {
  background("");

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  //star.debug=true;
  //fairy2.debug=true;
  fairy2.setCollider("rectangle",350,0,fairy.width,fairy.height);
  fairy.setCollider("rectangle",350,0,fairy.width,fairy.height);

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.isTouching(fairy)){
	fairy.changeImage("F1",fairys1);
	Matter.Body.setStatic(starBody,true);

  }

  if(fairy.isTouching(star)){
	fairy2.visible=true;
	fairy2.velocityX=5;
	stars.visible=true;
	
}

if(fairy.collide(inv)){
	Matter.Body.setStatic(starBody,false); 
    fairy.velocityX=0;
  }

  if(fairy2.collide(inv)){
	Matter.Body.setStatic(starBody,false); 
	fairy2.velocityX=0
	fairy2.changeImage("F3",fairys2);
	fairy2.setCollider("rectangle",0,0,fairy.width,fairy.height);
	bgd.changeImage("bb2",bgImg1);
	stars7.visible=true;
    fairy2.scale=1;
	stars.collide(fairy2);

  }


  drawSprites();

}

function keyPressed() {

	//writw code to move fairy left and right

	if (keyCode === RIGHT_ARROW) {
		fairy.velocityX=5;

	}
	
}
