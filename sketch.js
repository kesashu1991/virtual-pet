//Create variables here
var dog,dogimg, happydogimg, database, foodS,foodStock
function preload()
{
	//load images here
  dogimg=loadImage("images/dogImg1.png");
  happydogimg=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(700, 600);
  database= firebase.database()
  dog=createSprite(300,300);
  dog=addImage(dogimg);
  dog.scale=0.5
  foodStock= database.ref('Food')
  foodStock.on("value",readStock)
  
}
function readStock(data){
  foodS= data.val()
}
function writeStock(x){
  if (x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update(
    {
      Food:x
    }
  )
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydogimg)
}
fill("black")
textSize(30)
text("Food Available:"+ foodS,200,500)

  drawSprites();
  //add styles here
  fill("black")
  textSize(30)
  text("Press the Up arrow to feed the Dog",100,100)

}



