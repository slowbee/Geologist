class Iron {
    constructor(x, y) {
      var options = {
        'density':10,
        'friction': 2.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y,150,40,options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){

    var ironpos=this.body.position;
    var ironangle= this.body.angle;	
      push();
      translate(ironpos.x, ironpos.y);
      rotate(ironangle);
      strokeWeight(3);
      stroke('black')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };