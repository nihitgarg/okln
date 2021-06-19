const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bath1Img,bath2Img,brushImg,drink1Img,drink2Img,eat1Img,eat2Img,gym1Img,gym2Img,gym11Img,gym12Img,issImg,moveImg,move1Img,sleepImg;

function preload(){

  bath1Img = loadImage("bath1.png");
  bath2Img = loadImage("bath2.png");
  brushImg  = loadImage("brush.png");
  drink1Img  = loadImage("drink1.png");
  drink2Img  = loadImage("drink2.png");
  eat1Img  = loadImage("eat1.png");
  eat2Img  = loadImage("eat2.png");
  gym1Img  = loadImage("gym1.png");
  gym2Img = loadImage("gym2.png");
  gym11Img = loadImage("gym11.png");
  gym12Img = loadImage("gym12.png");
  issImg = loadImage("iss.png");
  moveImg = loadImage("move.png");
  move1Img = loadImage("move1.png");
  sleepImg = loadImage("sleep.png");

}

function setup() {
  createCanvas(windowWidth,windowHight);
  astronout = createSprite(300,230);
  astronout.addAnimation  ("sleeping",sleep);
  astronout.scale=0.1;

  bath1 = createSprite(300,230);
  bath1.addAnimation  ("bathing",bath);
  bath1.scale=0.1;

  bath2 = createSprite(300,230);
  bath2.addAnimation  ("bathing",bath);
  bath2.scale=0.1;

  brush = createSprite(300,230);
  brush.addAnimation  ("brushing",brush);
  brush.scale=0.1;

  drink1= createSprite(300,230);
  drink1.addAnimation  ("drinking",drink);
  drink1.scale=0.1;

  drink2= createSprite(300,230);
  drink2.addAnimation  ("drinking",drink);
  drink2.scale=0.1;

  eat1= createSprite(300,230);
  eat1.addAnimation  ("eating",eat);
  eat1.scale=0.1;

  eat2= createSprite(300,230);
  eat2.addAnimation  ("eating",eat);
  eat2.scale=0.1;

  gym1= createSprite(300,230);
  gym1.addAnimation  ("gyming",gym);
  gym1.scale=0.1;

  gym2= createSprite(300,230);
  gym2.addAnimation  ("gyming",gym);
  gym2.scale=0.1;

  gym11= createSprite(300,230);
  gym11.addAnimation  ("gyming",gym);
  gym11.scale=0.1;

  gym12= createSprite(300,230);
  gym12.addAnimation  ("gyming",gym);
  gym12.scale=0.1;

  iss= createSprite(300,230);
  iss.addAnimation  ("issing",iss);
  iss.scale=0.1;

  move= createSprite(300,230);
  move.addAnimation  ("moveing",move);
  move.scale=0.1;

  move1= createSprite(300,230);
  move1.addAnimation  ("moveing",move);
  move1.scale=0.1;

  sleep= createSprite(500,230);
  sleep.addAnimation  ("sleeping",sleep);
  sleep.scale=0.1;




}

function draw() {
  background(255,255,255);  
  drawSprites();
}