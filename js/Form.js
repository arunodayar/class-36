class Form {
  constructor() {
  this.title = createElement('h2')
  this.input = createInput("Name");
  this.button = createButton('Play');
  this.greeting = createElement('h3');
  this.reset = createButton('reset');

  }

  display(){
    
    this.title.html("Car Racing Game");
    this.title.position(windowWidth/2-50,0);
    
    this.input.position(windowWidth/2-50,windowHeight/2-80);
    this.button.position(windowWidth/2+30, windowHeight/2);

    this.reset.position(windowWidth-140,20);
    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount+=1;
    player.index=playerCount
    player.update()
    player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(windowWidth/2-70, windowHeight/4)
    });

    this.reset.mousePressed(()=>{
    game.update(0);
    player.updateCount(0);
    });

  }

  hide(){

    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
}
