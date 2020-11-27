//Create variables here
var database;
var foodS
var dog,normdog,happydog;
function preload(){
  //load images here
  normdog=loadImage("dogImg1.png")
  happydog=loadImage("dogImg.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  dog=createSprite(250,300,20,20)
  dog.addImage(normdog)
  dog.scale=0.2

  var food=database.ref("foodR");
  food.on("value",readstock //,writeStock 
  )
}


function draw() {  
  background(46, 139, 87)
  textSize(25)
  fill("White")
  text("Food Remaing: "+food,160,150)
  if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog)
  }
  drawSprites();
  //add styles here

}
function readstock(data){ 
foodS=data.val();
}
function writeStock(x){
if(x<=0){
x=0;
}else{
x=x-1;
}
database.ref('/').update({
foodR :x
})
}