class Game {
  constructor(){
    
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
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
  }

  static getPlayerinfo(){
    var playerInforef=database.ref("players")
    playerInforef.on("value",(data)=>{
      allPlayers=data.val();
    })
  }

}
