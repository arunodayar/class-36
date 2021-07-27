class Game {
  constructor(){
    
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref=await database.ref("playerCount").once("value");
      if(playerCountref.exists){
        playerCount=playerCountref.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car1.addImage(car1IMG);

    car2=createSprite(300,200);
    car2.addImage(car2IMG);

    car3=createSprite(500,200);
    car3.addImage(car3IMG);

    car4=createSprite(700,200);
    car4.addImage(car4IMG);

    cars=[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    
    //text("Game Started",180,100);
    Player.getPlayerinfo();

    if(allPlayers!==undefined){
      background("white")

      image(trackIMG,0,-windowHeight*4,windowWidth,windowHeight*5)

      //var display_position=130;
      var index=0;
      var x=300;
      var y;

        for(var plr in allPlayers){
          index=index+1;
        //if(plr==="player"+player.index){
          //fill("red");
        //}else{
          //fill("black")
        //}

        //display_position+=20
        //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)

          x=x+250;
          y=windowHeight-allPlayers[plr].distance;

          cars[index-1].x=x;
          cars[index-1].y=y;

          if(index===player.index){
            stroke('green');
            fill ("yellow");
            ellipse(x,y,70,70);
            cars[index-1].shapeColor="red";
            camera.position.x=windowWidth/2;
            camera.position.y=cars[index-1].y

          }
      }
    }

    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance+=50;
      player.update();
    }

    drawSprites();

  }
}
