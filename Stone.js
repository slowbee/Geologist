class Stone  {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y,150,100,options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){

    var stonepos=this.body.position;
    var stoneangle= this.body.angle;	
      push();
      translate(stonepos.x, stonepos.y);
      rotate(stoneangle);
      strokeWeight(3);
      stroke('Black')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };