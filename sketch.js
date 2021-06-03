var hr,sd,me;
var mAngle,hAngle,sAngle;

function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
 
}

function draw() {
  background(0);

  textSize(30);
  fill("Yellow");
  text("12",280,120);

  textSize(30);
  text("1",375,140);

  textSize(30);
  text("2",450,210);

  textSize(30);
  text("3",475,305);

  textSize(30);
  text("4",450,410);

  textSize(30);
  text("5",380,480);

  textSize(30);
  text("6",290,500);

  textSize(30);
  text("7",200,490);

  textSize(30);
  text("8",130,400);

  textSize(30);
  text("9",110,300);

  textSize(30);
  text("10",120,200);

  textSize(30);
  text("11",200,140);
  
  

  hr=hour();
  me=minute();
  sd=second();

  translate(300,300);
  rotate(-90);


  mAngle= map (me,0,60,0,360)
  sAngle= map (sd,0,60,0,360)
  hAngle=map (hr%12,0,12,0,360)

  push ();
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,sAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,mAngle);
  stroke(0,0,255);
  arc(0,0,260,260,0,hAngle);


  



  
  
  drawSprites();
}